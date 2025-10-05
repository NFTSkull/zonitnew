import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zonit - Soluciones Inteligentes de Automatización",
  description: "Especialistas en automatización inteligente para hogares y empresas. Control de iluminación, audio distribuido, seguridad, paneles solares y más.",
  keywords: "automatización, domótica, casa inteligente, paneles solares, seguridad inteligente, Monterrey",
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: "Zonit - Soluciones Inteligentes de Automatización",
    description: "Conectamos tu hogar y empresa con el futuro",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
