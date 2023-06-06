import "./globals.scss";
import { Inter } from "next/font/google";
import Provider from "./components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MenuOn 🚀 Create a Instant Menu on the Internet",
  description:
    "Bring your menu to the internet. Make it easier for your customers with QR menu.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
