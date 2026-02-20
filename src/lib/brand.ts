import { site } from "@/config/site";

export interface BrandConfig {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  faviconPath: string;
}

export function getBrandFromHost(host: string | null): BrandConfig {
  // ABN Revêtement (default)
  return {
    siteName: site.brandName,
    defaultTitle: site.seo.title,
    defaultDescription: site.seo.description,
    faviconPath: "/media/jobs/abn-logo.jpg",
  };
}









