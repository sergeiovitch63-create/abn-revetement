import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    siteName: site.brandName,
    images: [
      {
        url: site.og.image,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.og.image],
  },
  metadataBase: new URL("https://abn-revetement.com"),
};

export default function Home() {
  redirect("/m/abn-revetement");
}

