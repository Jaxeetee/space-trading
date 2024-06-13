import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
 } from '@/components/ui/popover';


const FactionList = () =>  {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("COSMIC");
  const [factionList, setFactionList] = useState<Array<string>>();

  return (
    <div>
      FactionList
    </div>
  )
}

export default FactionList