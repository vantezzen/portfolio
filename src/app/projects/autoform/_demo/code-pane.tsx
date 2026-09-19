"use client";

import { cn } from "@/lib/utils";
import type { ExampleField } from "./examples";
import { useHighlight } from "./highlight";

const TOKEN =
  /("(?:[^"\\]|\\.)*"|\/(?:[^/\\\n]|\\.)+\/[a-z]*|\b\d+\b|[A-Za-z_$][\w$]*(?=\s*:)|\.[A-Za-z_$][\w$]*|\b(?:const|new|import|from|export)\b|[A-Za-z_$][\w$]*|[{}()[\],;:=<>/]+|\s+)/g;

function tokenClass(token: string) {
  if (/^["/]/.test(token) || /^\d+$/.test(token)) return "text-neutral-200";
  if (/^[A-Za-z_$][\w$]*$/.test(token)) {
    return ["const", "new", "import", "from", "export"].includes(token)
      ? "text-neutral-500"
      : "text-neutral-300";
  }
  if (token.startsWith(".")) return "text-neutral-300";
  if (/^\s+$/.test(token)) return "";
  return "text-neutral-600";
}

/** Renders one line of source with light syntax coloring. Keys before a colon are bright. */
function Code({ source }: { source: string }) {
  const tokens = source.match(TOKEN) ?? [source];
  return (
    <>
      {tokens.map((token, index) => {
        const isKey =
          /^[A-Za-z_$][\w$]*$/.test(token) &&
          /^\s*:/.test(
            source.slice(
              source.indexOf(token, offsetOf(tokens, index)) + token.length,
            ),
          );
        return (
          <span
            key={index}
            className={isKey ? "text-white" : tokenClass(token)}
          >
            {token}
          </span>
        );
      })}
    </>
  );
}

function offsetOf(tokens: string[], index: number) {
  return tokens.slice(0, index).join("").length;
}

function Line({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("min-h-6 px-2", className)}>{children}</div>;
}

/**
 * The schema source. Each field is one block: hover it to highlight the
 * rendered input, click it to take the field out of the schema.
 */
export function CodePane({
  fields,
  disabled,
  onToggle,
}: {
  fields: ExampleField[];
  disabled: Set<string>;
  onToggle: (key: string) => void;
}) {
  const { hovered, setHovered } = useHighlight();

  return (
    <div className="flex min-w-0 flex-col gap-6 bg-neutral-900 p-5 sm:p-7">
      <pre className="overflow-x-auto font-mono text-xs leading-6 sm:text-[13px] text-neutral-400">
        <Line>
          <Code source={`import { z } from "zod";`} />
        </Line>
        <Line>
          <Code source={`import { ZodProvider } from "@autoform/zod";`} />
        </Line>
        <Line />
        <Line>
          <Code source={`const schema = z.object({`} />
        </Line>
        {fields.map((field) => {
          const isOff = disabled.has(field.key);
          return (
            <button
              key={field.key}
              type="button"
              aria-pressed={!isOff}
              aria-label={`${isOff ? "Add" : "Remove"} the ${field.key} field`}
              onPointerEnter={() => setHovered(field.key)}
              onPointerLeave={() => setHovered(null)}
              onFocus={() => setHovered(field.key)}
              onBlur={() => setHovered(null)}
              onClick={() => onToggle(field.key)}
              className={cn(
                "block w-full rounded-lg text-left font-[inherit] transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                hovered === field.key && "bg-white/10",
                isOff && "line-through decoration-neutral-500 opacity-40",
              )}
            >
              {field.code.split("\n").map((line, index) => (
                <Line key={index}>
                  {"  "}
                  <Code source={line} />
                </Line>
              ))}
            </button>
          );
        })}
        <Line>
          <Code source={`});`} />
        </Line>
        <Line />
        <Line>
          <Code
            source={`<AutoForm schema={new ZodProvider(schema)} withSubmit />`}
          />
        </Line>
      </pre>

      <p className="text-xs text-neutral-500">
        Hover a field to see where it ends up. Click one to take it out of the
        schema.
      </p>
    </div>
  );
}
