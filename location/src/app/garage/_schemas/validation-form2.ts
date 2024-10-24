import { z } from "zod";

export const formSchema2 = z.object({
        acceptTerms: z.boolean().refine(val => val === true, {
          message: "Vous devez accepter les termes et conditions"
        }),
      });

  export type formcheckbxType = z.infer<typeof formSchema2>;