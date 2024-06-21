import type { Metadata } from "next";
import { chivo, fira_mono } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Pastebin",
  description: "It kinda does the thing I wanted it to!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chivo.variable + ' ' + fira_mono.variable}>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl space-y-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
