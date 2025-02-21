import type { Metadata } from "next";
import Navegation from "@/ui/Navegacion/Navegation";
import "../styles/globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: "Libro-Click",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Navegation />
        {children}
      </body>
      <GoogleAnalytics gaId="G-3SSHLDHHES" />
    </html>
  );
}
