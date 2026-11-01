import { z } from "zod";
import texts from "@/data/texts.json";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: texts.validationForm.nameRequired })
    .regex(/^\S+\s+\S+/, { error: texts.validationForm.nameRequired }),

  phone: z
    .string()
    .trim()
    .min(1, { error: texts.validationForm.phoneRequired })
    .regex(/^\+?\d{9,15}$/, {
      error: texts.validationForm.phoneInvalid,
    }),

  email: z
    .string()
    .trim()
    .min(1, { error: texts.validationForm.emailRequired })
    .pipe(z.email({ error: texts.validationForm.emailInvalid })),
});

export type FormValues = z.infer<typeof formSchema>;
