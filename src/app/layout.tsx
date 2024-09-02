import type { Metadata } from "next";
import { Poppins, Jura, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jura = Jura({
  subsets: ['latin'],
  variable: '--font-jura',
  display: 'swap',
  weight: ['400', '700'], // Add the weights you need
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron-mono',
  display: 'swap',
  weight: ['400', '700'], // Add the weights you need
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.variable} ${orbitron.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
