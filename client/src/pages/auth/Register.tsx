import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import  { registrationSchema } from "@/schema";



const Register = () => {

  const form = useForm<z.infer<typeof registrationSchema>>({
      resolver: zodResolver(registrationSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof registrationSchema>) {
      
      console.log(values)
    }
  return (
   
    <div className="flex flex-col gap-6">

      <div className="w-full flex flex-col gap-2">
        <h3 className="font-bold text-3xl lg:text-4xl">Create New Account</h3>
        <p>Manage your parking with ease and book your car's place in the parking</p>

      </div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Paccy" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Aime" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="paccy@gmail.com" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Aime123!" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
        
     )
   
}

export default Register
