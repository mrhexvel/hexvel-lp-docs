import Link from "next/link";
import { ReactNode } from "react";

interface DeveloperCardProps {
  name: string;
  role: string;
  vkLink: string;
  description: string;
  icon: ReactNode;
}

export default function DeveloperCard({
  name,
  role,
  vkLink,
  description,
  icon,
}: DeveloperCardProps) {
  return (
    <div className="p-6 bg-[#191919] border border-[#242424] rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-md hover:shadow-indigo-400 hover:-translate-y-3 transition-all duration-200 justify-between">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-indigo-300 uppercase">{name}</h3>
      <p className="text-sm text-gray-400 italic">{role}</p>
      <p className="mt-4 text-gray-300">{description}</p>
      <Link
        href={vkLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 no-underline mt-2 py-4 px-8 border shadow-md rounded-xl"
      >
        Перейти на страницу ВК
      </Link>
    </div>
  );
}
