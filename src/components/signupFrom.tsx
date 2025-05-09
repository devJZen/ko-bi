 "use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .max(20, { message: "Password cannot be more than 20 characters." })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password must contain at least one uppercase letter.",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "Password must contain at least one lowercase letter.",
  })
  .refine((password) => /[0-9]/.test(password), { message: "Password must contain at least one number." })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "Password must contain at least one special character.",
  });

const SignupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(32, { message: "Name must be at most 32 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordSchema,
  confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
})


export default function SignupForm() {
  // Define form
  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  })
  const [pending, setPending] = useState(false)

  // Define submit handler
  async function onSubmit(values: z.infer<typeof SignupSchema>) {
    try {
      setPending(true)
      console.log("Form submitted", values)
    } catch (error) {
      setPending(false)
      console.log('Error: ', error)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="items-center">
        <CardTitle>Welcome to Ko-bi</CardTitle>
        <CardDescription>Sign-up to get started with Ko-bi</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-6">
          <FormField control={form.control} name="name" render={({field}) => (
            <FormItem>
              <FormLabel>
                Name <span aria-hidden="true">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Lee Robinson"
                  className={cn("border-white border", {
                    'border-[#ff0000]': form.formState.errors.name
                  })}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({field}) => (
              <FormItem>
                <FormLabel>
                  Email <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="leerob@acme.com"
                    className={cn("border-white border", {
                      'border-[#ff0000]': form.formState.errors.email
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="password" render={({field}) => (
              <FormItem>
                <FormLabel>
                  Password <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your Password"
                    className={cn("border-white border", {
                      'border-[#ff0000]': form.formState.errors.password
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="confirmPassword" render={({field}) => (
              <FormItem>
                <FormLabel>
                  Confirm Password <span aria-hidden="true">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your Password"
                    className={cn("border-white border", {
                      'border-[#ff0000]': form.formState.errors.confirmPassword
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
        </CardContent>
        <CardFooter>
          <Button type="submit" size="sm" className=" border border-white px-4 py-1 rounded-md">
            {pending ? "Signing-up..." : "Sign-up"}
          </Button>
        </CardFooter>
        </form>
      </Form>
    </Card>
  )
}
