import { baseOptions } from "@/app/layout.config";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "HEXVEL",
  icons: {
    icon: "/webstite-logo.png",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout {...baseOptions} className="!pt-0">
      {children}
    </HomeLayout>
  );
}
