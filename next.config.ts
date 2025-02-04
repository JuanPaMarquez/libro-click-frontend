  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    reactStrictMode: true, // Habilita el modo estricto de React
    images: {
      unoptimized: true, // Hace que las imágenes sean compatibles con exportaciones estáticas
    },
    basePath: "/libro-click-frontend",
    assetPrefix: "/libro-click-frontend",
  };

  export default nextConfig;
