/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HF_API_KEY: string;
  readonly VITE_INSTAGRAM_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
