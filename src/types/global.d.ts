 // react-query.d.ts
import '@tanstack/react-query'
// import type { AxiosRequestConfig } from "axios";


 interface MyMeta extends Record<string, unknown> {
  requiresAuth?: boolean
}

declare module '@tanstack/react-query' {
  interface Register {
    queryMeta: MyMeta
    mutationMeta: MyMeta
  }
}

declare module "axios" {
	 interface AxiosRequestConfig {
    	requiresAuth?: boolean;
	 }
}