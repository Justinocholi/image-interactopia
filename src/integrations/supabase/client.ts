// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fixwmougrwcjoajqcbku.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpeHdtb3Vncndjam9hanFjYmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2ODI5NjEsImV4cCI6MjA1NTI1ODk2MX0.lw5pRg0mlbyHjjvGZ928LwVH9SaWIk6SA7qCQh-JG4Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);