import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { Command, Home } from "lucide-react";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: "HexDocs",
        transparentMode: "top",
      }}
      sidebar={{
        defaultOpenLevel: 2,
        banner: (
          <div className="p-4 text-center text-sm text-muted-foreground">
            <Command className="inline-block mr-2 h-4 w-4" />
            Управляйте VK с HEXVEL
          </div>
        ),
      }}
      links={[
        { text: "Главная", url: "/docs", icon: <Home className="h-4 w-4" /> },
        {
          text: "Команды",
          url: "/docs/commands",
          icon: <Command className="h-4 w-4" />,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
