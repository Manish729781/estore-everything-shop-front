-- First, let's clean up any existing admin user that might be causing issues
DELETE FROM public.profiles WHERE email = 'gits22222@gmail.com';
DELETE FROM auth.users WHERE email = 'gits22222@gmail.com';