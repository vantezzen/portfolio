"use client";

import { useController } from "react-hook-form";
import { motion } from "motion/react";
import { useEntrance } from "@/components/motion";
import { ChevronDown, Plus, X } from "lucide-react";
import type {
  ArrayElementWrapperProps,
  ArrayWrapperProps,
  AutoFormFieldComponents,
  AutoFormFieldProps,
  AutoFormUIComponents,
  FieldWrapperProps,
  ObjectWrapperProps,
} from "@autoform/react";
import { cn } from "@/lib/utils";
import { useHighlight } from "./highlight";

/**
 * A minimal AutoForm UI package in the portfolio's own style. This is all it
 * takes to make AutoForm render with a custom component library.
 */

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-800 outline-none transition placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-2 focus:ring-neutral-200 aria-invalid:border-red-400";

function Form(props: React.ComponentProps<"form">) {
  return <form className="flex flex-col gap-5" noValidate {...props} />;
}

function FieldWrapper({
  id,
  label,
  error,
  children,
  parsedField,
}: FieldWrapperProps) {
  const { hovered, setHovered } = useHighlight();
  const entrance = useEntrance(0.25);
  const topLevelKey = id.includes(".") ? null : id;
  const showLabel = !["boolean", "object", "array"].includes(parsedField.type);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={entrance}
      onPointerEnter={() => topLevelKey && setHovered(topLevelKey)}
      onPointerLeave={() => topLevelKey && setHovered(null)}
      className={cn(
        "-m-2 flex flex-col gap-1.5 rounded-2xl p-2 transition-colors duration-200",
        topLevelKey && hovered === topLevelKey && "bg-white/70",
      )}
    >
      {showLabel && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700">
          {label}
          {!parsedField.required && (
            <span className="font-normal text-neutral-400"> · optional</span>
          )}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </motion.div>
  );
}

function ErrorMessage({ error }: { error: string }) {
  return <p className="text-xs text-red-500">{error}</p>;
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="mt-1 self-start rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
    >
      {children}
    </button>
  );
}

function ObjectWrapper({ label, children }: ObjectWrapperProps) {
  return (
    <fieldset className="flex flex-col gap-4 rounded-2xl border border-neutral-200 p-4">
      <legend className="px-1 text-sm font-medium text-neutral-700">
        {label}
      </legend>
      {children}
    </fieldset>
  );
}

function ArrayWrapper({ label, children, onAddItem }: ArrayWrapperProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      {children}
      <button
        type="button"
        onClick={onAddItem}
        className="inline-flex items-center gap-1 self-start rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-white"
      >
        <Plus className="size-3.5" /> Add
      </button>
    </div>
  );
}

function ArrayElementWrapper({ children, onRemove }: ArrayElementWrapperProps) {
  return (
    <div className="flex items-start gap-2">
      <div className="flex-1">{children}</div>
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove"
        className="mt-1 rounded-full p-1.5 text-neutral-400 hover:bg-white hover:text-neutral-700"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}

function StringField({ id, inputProps }: AutoFormFieldProps) {
  const { field } = useController({ name: id, defaultValue: "" });
  return (
    <input
      id={id}
      type="text"
      className={cn(inputClass, "h-10")}
      {...inputProps}
      {...field}
      value={field.value ?? ""}
    />
  );
}

function TextareaField({ id, inputProps }: AutoFormFieldProps) {
  const { field } = useController({ name: id, defaultValue: "" });
  return (
    <textarea
      id={id}
      rows={3}
      className={cn(inputClass, "resize-none py-2")}
      {...inputProps}
      {...field}
      value={field.value ?? ""}
    />
  );
}

function NumberField({ id, inputProps }: AutoFormFieldProps) {
  const { field } = useController({ name: id });
  return (
    <input
      id={id}
      type="number"
      className={cn(inputClass, "h-10")}
      {...inputProps}
      {...field}
      value={field.value ?? ""}
      onChange={(event) =>
        field.onChange(
          event.target.value === "" ? undefined : Number(event.target.value),
        )
      }
    />
  );
}

function DateField({ id, inputProps }: AutoFormFieldProps) {
  const { field } = useController({ name: id });
  const value =
    field.value instanceof Date
      ? field.value.toISOString().slice(0, 10)
      : (field.value ?? "");
  return (
    <input
      id={id}
      type="date"
      className={cn(inputClass, "h-10")}
      {...inputProps}
      {...field}
      value={value}
    />
  );
}

function BooleanField({ id, label, inputProps }: AutoFormFieldProps) {
  const {
    field: { value, onChange, ...rest },
  } = useController({ name: id });
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-2.5 text-sm text-neutral-700"
    >
      <input
        id={id}
        type="checkbox"
        className="size-4 rounded accent-neutral-900"
        {...inputProps}
        {...rest}
        checked={!!value}
        onChange={(event) => onChange(event.target.checked)}
      />
      {label}
    </label>
  );
}

function SelectField({ id, inputProps, parsedField }: AutoFormFieldProps) {
  const { field } = useController({ name: id });
  return (
    <div className="relative">
      <select
        id={id}
        className={cn(inputClass, "h-10 appearance-none pr-9")}
        {...inputProps}
        {...field}
        value={field.value ?? ""}
      >
        {!field.value && <option value="">Select…</option>}
        {(parsedField.options ?? []).map(([value, optionLabel]) => (
          <option key={value} value={value}>
            {optionLabel}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-400" />
    </div>
  );
}

export const uiComponents: AutoFormUIComponents = {
  Form,
  FieldWrapper,
  ErrorMessage,
  SubmitButton,
  ObjectWrapper,
  ArrayWrapper,
  ArrayElementWrapper,
};

export const formComponents: AutoFormFieldComponents = {
  string: StringField,
  textarea: TextareaField,
  number: NumberField,
  date: DateField,
  boolean: BooleanField,
  select: SelectField,
};
