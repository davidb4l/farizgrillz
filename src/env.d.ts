/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  //
  readonly CONSUMER_KEY: string;
  readonly CONSUMER_SECRET: string;
  //
  readonly ADMIN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
