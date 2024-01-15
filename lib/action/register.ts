"use server";

import * as z from "zod";

import { RegisterSchema } from "@/lib/schemas";

export default async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
}
