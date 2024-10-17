import { z } from "zod";

export const formSchema = z.object({
        // DateDu: z.preprocess(
        //   (val) => (typeof val === "string" ? new Date(val) : val),
        //   z.date({ invalid_type_error: "Date de début invalide" }) 
        // ),
        
        // DateAu: z.preprocess(
        //   (val) => (typeof val === "string" ? new Date(val) : val),
        //   z.date({ invalid_type_error: "Date de fin invalide" })
        // ),
        DateDu: z.string().date(),
        DateAu: z.string().date()
      });

  export type formInputType = z.infer<typeof formSchema>;