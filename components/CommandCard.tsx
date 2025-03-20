import { Callout } from "fumadocs-ui/components/callout";
import { Card } from "fumadocs-ui/components/card";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Code } from "lucide-react";
import { ReactNode } from "react";

interface CommandCardProps {
  title: string;
  description: string;
  command: string;
  isDeclared?: boolean;
  newLine?: string;
  secondLine?: string;
  icon?: ReactNode;
  example?: string;
  exampleSecond?: string;
  exampleThird?: string;
}

export default function CommandCard({
  title,
  description,
  command,
  isDeclared,
  newLine,
  secondLine,
  icon,
  example,
  exampleSecond,
  exampleThird,
}: CommandCardProps) {
  return (
    <Card title={title}>
      <div className="flex items-center gap-3">
        {icon || <Code className="h-5 w-5 text-indigo-300" />}
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p
            className={`text-sm text-gray-300 ${isDeclared && "text-red-300"}`}
          >
            {description}
          </p>
        </div>
      </div>
      <CodeBlock className="mt-2 text-indigo-300 rounded-md text-sm">
        <Pre className={newLine ? "pb-0" : ""}>{command}</Pre>
        {newLine && (
          <Pre className={secondLine ? "py-0" : "pt-0"}>{newLine}</Pre>
        )}
        {secondLine && <Pre className="pt-0">{secondLine}</Pre>}
      </CodeBlock>
      {example && (
        <Callout>
          <p className="text-sm text-indigo-200 break-words">{example}</p>
          {exampleSecond && (
            <p className="text-sm text-indigo-200 break-words">
              {exampleSecond}
            </p>
          )}
          {exampleThird && (
            <p className="text-sm text-indigo-200 break-words">
              {exampleThird}
            </p>
          )}
        </Callout>
      )}
    </Card>
  );
}
