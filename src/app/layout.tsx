import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskMaster - Modern Todo List Application",
  description:
    "Stay organized and boost your productivity with TaskMaster, the modern and intuitive todo list application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0B14]`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
