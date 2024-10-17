import { z } from "zod";

export const formSchema = z.object({
        DateDu: z.string().date(),
        DateAu: z.string().date()
      });

  export type formInputType = z.infer<typeof formSchema>;