import { z } from "zod";

const defaultValues = {
  email: "",
  password: "",
};

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export { defaultValues, schema };
