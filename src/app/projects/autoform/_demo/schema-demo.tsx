"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { useEntrance } from "@/components/motion";
import { z } from "zod";
import { ZodProvider } from "@autoform/zod";
import { AutoForm } from "@autoform/react/react-hook-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CodePane } from "./code-pane";
import { examples } from "./examples";
import { HighlightContext } from "./highlight";
import { formComponents, uiComponents } from "./ui";

/**
 * Live AutoForm demo: the schema on the left is the real input to the form on
 * the right. Switching examples or toggling fields rebuilds the schema and
 * lets AutoForm re-render the form from it.
 */
export function SchemaDemo({ className }: { className?: string }) {
  const [exampleId, setExampleId] = useState(examples[0].id);
  const [disabled, setDisabled] = useState<Set<string>>(new Set());
  const [hovered, setHovered] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<Record<string, unknown> | null>(
    null,
  );
  const resultEntrance = useEntrance(0.3);

  const example =
    examples.find((entry) => entry.id === exampleId) ?? examples[0];
  const enabledFields = example.fields.filter(
    (field) => !disabled.has(field.key),
  );
  const schemaKey = `${example.id}:${enabledFields.map((field) => field.key).join(",")}`;

  const provider = useMemo(
    () =>
      new ZodProvider(
        z.object(
          Object.fromEntries(
            enabledFields.map((field) => [field.key, field.schema]),
          ),
        ),
      ),
    // The enabled field set is fully described by schemaKey.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schemaKey],
  );

  function selectExample(id: string) {
    setExampleId(id);
    setDisabled(new Set());
    setSubmitted(null);
  }

  function toggleField(key: string) {
    setDisabled((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
    setSubmitted(null);
  }

  return (
    <div className={cn("flex w-full flex-col items-center gap-6", className)}>
      <Tabs
        value={exampleId}
        onValueChange={(value) => selectExample(String(value))}
        className="w-full max-w-sm"
      >
        <TabsList aria-label="Example schema">
          {examples.map((entry) => (
            <TabsTrigger key={entry.id} value={entry.id}>
              {entry.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <HighlightContext.Provider value={{ hovered, setHovered }}>
        <div className="grid w-full overflow-hidden rounded-3xl md:grid-cols-2">
          <CodePane
            fields={example.fields}
            disabled={disabled}
            onToggle={toggleField}
          />

          <div className="flex min-w-0 flex-col gap-6 bg-neutral-100 p-6 sm:p-8">
            {enabledFields.length > 0 ? (
              <AutoForm
                key={schemaKey}
                schema={provider}
                uiComponents={uiComponents}
                formComponents={formComponents}
                onSubmit={(values) => setSubmitted(values)}
                withSubmit
              />
            ) : (
              <p className="text-sm text-neutral-500">
                No fields left. Click one on the left to add it back.
              </p>
            )}

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={resultEntrance}
                className="flex flex-col gap-2 border-t border-neutral-200 pt-5"
              >
                <span className="text-xs text-neutral-500">
                  onSubmit received validated values
                </span>
                <pre className="overflow-x-auto font-mono text-xs leading-5 text-neutral-700">
                  {JSON.stringify(submitted, null, 2)}
                </pre>
              </motion.div>
            )}
          </div>
        </div>
      </HighlightContext.Provider>
    </div>
  );
}
