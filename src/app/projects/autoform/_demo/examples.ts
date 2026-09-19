import { z } from "zod";
import { fieldConfig } from "@autoform/zod";

export type ExampleField = {
  key: string;
  /** Source shown in the code pane. Multi-line strings are indented per line. */
  code: string;
  schema: z.ZodType;
};

export type Example = {
  id: string;
  label: string;
  fields: ExampleField[];
};

export const examples: Example[] = [
  {
    id: "profile",
    label: "Profile",
    fields: [
      {
        key: "name",
        code: `name: z.string("Required").min(2, "At least 2 characters"),`,
        schema: z.string("Required").min(2, "At least 2 characters"),
      },
      {
        key: "email",
        code: `email: z.email("Use a valid email"),`,
        schema: z.email("Use a valid email"),
      },
      {
        key: "birthday",
        code: `birthday: z.coerce.date().optional(),`,
        schema: z.coerce.date().optional(),
      },
      {
        key: "role",
        code: `role: z.enum(["Admin", "Editor", "Viewer"])\n  .default("Editor"),`,
        schema: z.enum(["Admin", "Editor", "Viewer"]).default("Editor"),
      },
      {
        key: "newsletter",
        code: `newsletter: z.boolean().default(true)\n  .describe("Send me the newsletter"),`,
        schema: z.boolean().default(true).describe("Send me the newsletter"),
      },
    ],
  },
  {
    id: "event",
    label: "Event",
    fields: [
      {
        key: "title",
        code: `title: z.string("Required").min(3),`,
        schema: z.string("Required").min(3),
      },
      { key: "date", code: `date: z.coerce.date(),`, schema: z.coerce.date() },
      {
        key: "capacity",
        code: `capacity: z.number().int().min(1).max(500)\n  .default(20),`,
        schema: z.number().int().min(1).max(500).default(20),
      },
      {
        key: "visibility",
        code: `visibility: z.enum(["Public", "Unlisted", "Private"]),`,
        schema: z.enum(["Public", "Unlisted", "Private"]),
      },
      {
        key: "description",
        code: `description: z.string().max(280).optional()\n  .check(fieldConfig({ fieldType: "textarea" })),`,
        schema: z
          .string()
          .max(280)
          .optional()
          .check(fieldConfig({ fieldType: "textarea" })),
      },
    ],
  },
  {
    id: "shipping",
    label: "Shipping",
    fields: [
      {
        key: "recipient",
        code: `recipient: z.string("Required"),`,
        schema: z.string("Required"),
      },
      {
        key: "address",
        code: `address: z.object({\n  street: z.string(),\n  city: z.string(),\n  postalCode: z.string().regex(/^\\d{5}$/, "Five digits"),\n}),`,
        schema: z.object({
          street: z.string(),
          city: z.string(),
          postalCode: z.string().regex(/^\d{5}$/, "Five digits"),
        }),
      },
      {
        key: "express",
        code: `express: z.boolean().default(false),`,
        schema: z.boolean().default(false),
      },
      {
        key: "notes",
        code: `notes: z.string().optional(),`,
        schema: z.string().optional(),
      },
    ],
  },
];
