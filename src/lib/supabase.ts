import { createServerClient } from "@supabase/ssr";
import type { AstroCookies } from "astro";

export const supabase = (cookieStore: AstroCookies) =>
  createServerClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        get(key) {
          return cookieStore.get(key)?.value;
        },
        set(key, value, options) {
          //@ts-ignore
          return cookieStore.set(key, value, ...options);
        },
        remove(key, options) {
          //@ts-ignore
          return cookieStore.set(key, "", ...options);
        },
      },
    }
  );
