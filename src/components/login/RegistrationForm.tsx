"use client"

import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FactionList from './FactionList';


const RegistrationForm = (props: any) =>  {
  const [faction, setFaction] = useState<string>("");

  const formSchema = z.object({
    symbol: z.string().min(3).max(14),
    faction: z.string()
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symbol: "",
      faction: "COSMIC"
    }
  })

  const onFactionSelect = (selectedItem: string) =>  {
    setFaction(selectedItem)
  }

  const submitHandler = (values: z.infer<typeof formSchema>) =>  {
    props.onUpdateCallsignInput(values.symbol);
    props.onUpdateFactionSelect(values.faction);
    props.onSubmit();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitHandler)}>
        <FormField 
          control={form.control} 
          name="symbol" 
          render={({ field }) =>  (
            <FormItem className='py-4'>
              <FormLabel className='flex'>Symbol</FormLabel>
              <FormControl>
                <Input 
                  className='rounded-[5px]'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField 
          control={form.control} 
          name="faction" 
          render={({ field }) =>  (
            <FormItem className='py-4'>
              <FormLabel className='flex'>Faction</FormLabel>
              <FormControl>
                <FactionList 
                  field = {field}
                />
              </FormControl>
            </FormItem>
          )}
        />
          <div className='flex flex-row my-8 gap-4 py-4'>
            <Button onClick={props.onCancel}  className='flex w-full hover:bg-offwhite bg-neutral-950 hover:text-black text-offwhite rounded-[5px]' >Cancel</Button>
            <Button type="submit" className='flex w-full hover:bg-amber-100 hover:ring-2 hover:ring-neutral-950 hover:ring-inset bg-offwhite text-black rounded-[5px]' >Create</Button>
          </div>
      </form>
    </Form>
  )
}

export default RegistrationForm