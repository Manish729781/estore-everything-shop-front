
-- Add avatar_url column to profiles table if it doesn't exist
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS avatar_url TEXT;

-- Create storage bucket for avatars
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars',
  'avatars', 
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- Create storage policy to allow anyone to view avatars (public bucket)
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT 
  USING (bucket_id = 'avatars');

-- Create policy to allow authenticated users to upload their own avatars
CREATE POLICY "Users can upload their own avatar" ON storage.objects
  FOR INSERT 
  WITH CHECK (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Create policy to allow users to update their own avatars
CREATE POLICY "Users can update their own avatar" ON storage.objects
  FOR UPDATE 
  USING (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Create policy to allow users to delete their own avatars
CREATE POLICY "Users can delete their own avatar" ON storage.objects
  FOR DELETE 
  USING (
    bucket_id = 'avatars' 
    AND auth.uid()::text = (storage.foldername(name))[1]
  );
