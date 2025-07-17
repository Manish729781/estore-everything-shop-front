
-- Insert admin user directly into auth.users and profiles tables
-- This will create the admin account with email: gits22222@gmail.com and password: Manish@321

-- First, insert into auth.users table (this is where Supabase stores authentication data)
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  raw_app_meta_data,
  raw_user_meta_data,
  is_super_admin,
  role
) VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'gits22222@gmail.com',
  crypt('Manish@321', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider": "email", "providers": ["email"]}',
  '{"full_name": "Admin User"}',
  false,
  'authenticated'
);

-- Insert corresponding profile record
INSERT INTO public.profiles (
  id,
  full_name,
  email,
  role
) 
SELECT 
  id,
  'Admin User',
  'gits22222@gmail.com',
  'admin'
FROM auth.users 
WHERE email = 'gits22222@gmail.com';
