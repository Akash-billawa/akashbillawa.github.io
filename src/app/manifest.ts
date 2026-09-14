import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akash | Cyber Security Engineer & Flutter Developer",
    short_name: "Akash",
    description:
      "Personal portfolio of Akash - Cyber Security Engineer and Flutter Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#c8ff00",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
