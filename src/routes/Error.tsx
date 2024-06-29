import React from 'react'
import {
  RocketLaunchIcon
} from "@heroicons/react/24/outline"

const Error = () => {
  return (
    <div className='bg-black h-screen w-screen text-offwhite flex items-center justify-center gap-4'>
      <RocketLaunchIcon width={24} height={24}/>
      <h3 className='font-semibold text-2xl'>OOPS! something went wrong</h3>
    </div>
  )
}

export default Error

