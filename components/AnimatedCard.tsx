import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export default function AnimatedCard({
  title,
  description,
  href,
  icon,
}: AnimatedCardProps) {
  return (
    <Link
      href={href}
      className="p-6 bg-gray-50 dark:bg-[#191919] dark:border border-[#242424] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:border-emerald flex flex-col items-center dark:text-center"
    >
      <div className="text-emerald mb-4">{icon}</div>
      <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
      <p className="text-sm text-fd-muted-foreground mt-2">{description}</p>
    </Link>
  );
}
