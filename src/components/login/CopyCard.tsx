import React, { useState } from 'react' 

import { ClipboardCopyIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

const CopyCard = (props: any) =>  {
  
  const [ continueButtonState, setContinueButtonState] = useState<boolean>(false);

  const onCopyClipboard = () =>  {
    setContinueButtonState(true);
    navigator.clipboard.writeText("test")
  }

  const onContinue = () =>  {
    props.navigateToDashboard();
  } 

  return (
    <div>
      <h1 className='text-xl font-semibold'> Copy your token! </h1>
      <p className='flex-wrap m-4'> 
        Save your token in a text file. 
        Your token <br /> contains your progress. 
        Though server resets ever 2-3 weeks
      </p>


      <Button
        onClick={onCopyClipboard}
        variant='outline'
        
        className='m-4 hover:bg-amber-100 hover:text-black rounded-[5px]'
      >
        TOKEN_
        <ClipboardCopyIcon />
      </Button>
      <Button
        disabled={!continueButtonState}
        onClick={onContinue}
        className='flex w-full hover:bg-amber-100 hover:ring-2 hover:ring-neutral-950 hover:ring-inset bg-offwhite text-black rounded-[5px]' 
      >
        Continue
      </Button> 
    </div>
  )
}

export default CopyCard