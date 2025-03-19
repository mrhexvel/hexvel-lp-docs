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
    <div className="p-6 bg-[#191919] border border-[#242424] rounded-lg shadow-lg transition-shadow flex flex-col items-center text-center hover:shadow-lg hover:shadow-emerald-600 duration-500">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-emerald-500 uppercase">{name}</h3>
      <p className="text-sm text-gray-400 italic">{role}</p>
      <a
        href={vkLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline mt-2"
      >
        {vkLink}
      </a>
      <p className="mt-4 text-gray-300">{description}</p>
    </div>
  );
}
