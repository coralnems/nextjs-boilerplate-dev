"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

const schema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Must be 2 or more characters long" }),
  age: z.number(),
});

type Schema = z.infer<typeof schema>;

export function ReactHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Schema> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <section className="flex w-full flex-col gap-2 pt-6">
      <h2 className="font-medium">React Hook Form</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-sm flex-col gap-2"
      >
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input {...register("name")} />

          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="age">Age</Label>
          <Input
            {...register("age", { valueAsNumber: true, required: false })}
            type="number"
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
}