/// <reference types="vite/client" />

interface ImportMeta {
  env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}
