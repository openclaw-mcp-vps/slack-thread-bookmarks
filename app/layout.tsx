import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThreadMark – Save & Organize Slack Threads",
  description: "Browser extension that lets you bookmark, tag, and search Slack threads across multiple workspaces with AI-powered summaries."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="56b57260-aa2a-4809-a8c4-502e90e3394b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
