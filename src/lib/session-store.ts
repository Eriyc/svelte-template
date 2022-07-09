import type { AuthUser } from '@supabase/supabase-js';
import { writable } from 'svelte/store';

export const user = writable<AuthUser | null>(null);
