import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLogin } from "@/lib/auth"
import { useForm } from "react-hook-form"
import { LoginCredentials, loginSchema } from "../validators"

const SignIn = () => {
  const login = useLogin();
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: LoginCredentials) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    login.mutate(values, {
      onSuccess: () => {
        navigate('/app')
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={login.isLoading}>Submit</Button>
      </form>
    </Form>
  )
}

export default SignIn