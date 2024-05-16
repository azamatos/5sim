/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_VERSION: number;
  readonly VITE_API_USER_TYPE: "guest" | "user" | "admin";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
