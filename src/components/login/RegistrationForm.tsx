"use client"


import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FactionList from './FactionList';
import { FactionSymbols } from '@/interface/faction';

const RegistrationForm = (props: any) =>  {

  const formSchema = z.object({
    symbol: z.string().min(3).max(14),
    faction: z.nativeEnum(FactionSymbols)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symbol: undefined,
      faction: undefined
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) =>  {
    props.onContentChange(true);
    props.onSubmit({symbol: values.symbol, faction: values.faction});
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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