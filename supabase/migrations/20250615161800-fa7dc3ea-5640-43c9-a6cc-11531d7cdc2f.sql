
-- Add a table to store login events
CREATE TABLE public.login_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  email text,
  mobile_number text,
  login_at timestamptz NOT NULL DEFAULT NOW()
);

-- Enable row level security (RLS)
ALTER TABLE public.login_history ENABLE ROW LEVEL SECURITY;

-- Allow users to insert their own login events
CREATE POLICY "User can insert their own login events"
  ON public.login_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Allow users to select their own login events
CREATE POLICY "User can select their own login events"
  ON public.login_history
  FOR SELECT
  USING (auth.uid() = user_id);

