
-- Ensure the profiles table has proper structure and the trigger works correctly
-- First, let's make sure the trigger function handles all the metadata properly

CREATE OR REPLACE FUNCTION public.handle_new_user_profile()
RETURNS trigger as $$
begin
  insert into public.profiles (id, full_name, email, mobile_number)
  values (
    new.id, 
    coalesce(new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'name'), 
    new.email, 
    new.raw_user_meta_data ->> 'mobile_number'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Make sure the trigger exists and is active
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user_profile();

-- Add updated_at trigger for profiles table
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

DROP TRIGGER IF EXISTS handle_updated_at ON public.profiles;
CREATE TRIGGER handle_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();
