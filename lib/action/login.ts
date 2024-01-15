import * as z from "zod";

import { LoginSchema } from "@/lib/schemas";

export default async function Login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  console.log(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Email sent!" };
};
