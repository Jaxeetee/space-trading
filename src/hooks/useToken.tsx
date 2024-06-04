import { TOKEN } from '@/lib/constants';
import { useEffect, useState } from 'react';

// ? I think this is kinda stupid
export default function useToken()
{ 
  return localStorage.getItem(TOKEN); 
}