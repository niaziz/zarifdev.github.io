import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Niazi",
  description: "Not Made in China",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-full bg-slate-100">
            <main className="flex-grow dark text-foreground bg-background">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
