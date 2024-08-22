"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  search: z.string().min(1, {
    message: "Digite algo para Buscar.",
  }),
})

const Search = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  })

  const router = useRouter()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/barbershop?title=${values.search}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Buscar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>
          <SearchIcon />
        </Button>
      </form>
    </Form>
  )
}

export default Search
