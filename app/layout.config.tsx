import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Book, Command } from "lucide-react";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    transparentMode: "always",
    title: (
      <>
        <Image
          src={"/logo.png"}
          alt="Logo"
          width={120}
          height={120}
          className="h-[24px] w-[24px] rounded-full"
        />
        HexDocs
      </>
    ),
  },
  githubUrl: "https://github.com/hexvel",
  links: [
    {
      icon: <Book />,
      text: "Документация",
      url: "/docs",
      active: "nested-url",
    },
    {
      icon: <Command />,
      text: "Команды",
      url: "/docs/commands",
    },
  ],
};
