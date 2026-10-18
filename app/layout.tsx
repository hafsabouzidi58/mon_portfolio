import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack & Software Engineer",
  description: "Portfolio professionnel de développement full-stack et ingénierie logicielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className="bg-[#080808] text-zinc-100 antialiased selection:bg-emerald-500 selection:text-black">
        {/* Le header global (Navbar) viendra ici */}
        
        <main className="min-h-screen">
          {children}
        </main>

        {/* Le footer global viendra ici */}
      </body>
    </html>
  );
}