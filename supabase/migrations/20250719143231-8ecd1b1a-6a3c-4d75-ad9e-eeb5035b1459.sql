-- Update the handle_new_user function to make all new signups admins
-- This is temporary for testing purposes
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email,
    'admin'  -- Make all new signups admin for now
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;