import { useEffect, useState } from 'react';

import { Faction } from '@/interface/faction';
import { fetchFactions } from '@/spacetraders-api/faction/faction';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { 
  Command, 
  CommandGroup, 
  CommandList,
  CommandItem 
} from '../ui/command';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '../ui/button';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const FactionList = ({ field }: any) =>  {
  const [open, setOpen] = useState<boolean>(false);
  const [factionList, setFactionList] = useState<Array<Faction>>();

  const getFactions = async () =>  {
    fetchFactions().then(
      data =>  setFactionList(data)
    )
  }

  useEffect(() =>  {
    getFactions();
  },[])

  return (
    <Select onValueChange={field.onChange}>
      <SelectTrigger
          className='min-w-full justify-between rounded-[5px] mt-4'
        >
          <SelectValue placeholder='Select a faction' />      
        </SelectTrigger>
      <SelectContent
        className='bg-black'>
      {
        factionList ? 
          factionList.map((faction) =>  (
            <SelectItem
              className='text-offwhite hover:text-white hover:bg-slate-500 hover:font-bold'
              aria-expanded={open}
              key={faction.symbol}
              value={faction.symbol}
              >
                {faction.symbol}
            </SelectItem>
          ))
        :
        <div>loading</div>
      }
      </SelectContent>

    </Select>
  )
}

export default FactionList