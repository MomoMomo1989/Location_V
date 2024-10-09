import { z } from "zod";

export const formSchema = z.object({
    DateDu : z.date(),
    DateAu : z.date(),
    Duree : z.string(),
    Cout : z.string()
  })