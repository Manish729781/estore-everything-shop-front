
-- 1. Create a "profiles" table to store customer data.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  mobile_number text,
  updated_at timestamp with time zone default now()
);

-- 2. Enable Row Level Security.
alter table public.profiles enable row level security;

-- 3. Allow users to select (view) their own profile.
create policy "Users can view their own profile" on public.profiles
  for select
  using (auth.uid() = id);

-- 4. Allow users to update their own profile.
create policy "Users can update their own profile" on public.profiles
  for update
  using (auth.uid() = id);

-- 5. Allow users to insert (create) their profile.
create policy "Users can create their own profile" on public.profiles
  for insert
  with check (auth.uid() = id);

-- 6. Automatically create a profile row when a new user signs up.
create or replace function public.handle_new_user_profile()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, mobile_number)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.email, new.raw_user_meta_data ->> 'mobile_number');
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user_profile();
