import axios from "axios";
import { IAccountData } from "./types";

export async function getMyDetails(): Promise<IAccountData | undefined>
{

  //for not I'll use my own MY_TOKEN var
  const MY_TOKEN: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU1A0Q0VfTk9NQUQiLCJ2ZXJzaW9uIjoidjIuMi4wIiwicmVzZXRfZGF0ZSI6IjIwMjQtMDQtMjgiLCJpYXQiOjE3MTQ4MDk4ODIsInN1YiI6ImFnZW50LXRva2VuIn0.a-A1qeRgPokAm5tJqrp06nfxxNkFcNxBxKkEptzDWc2H7tc4llnTg5uWu-6sJW1NlzVKaMko1ukKofaFs9o5LdtytgGFLXm02lUSpt413n9X_Pt6fgR-2JLC9vGW8SirVGGcsFvg22B5Tvbyu4sBHkWvfAxQp0yqiLYfNNCcqeagThe5FtnoTuLCF-ueIkIVfy4UvTxUekzfw57-OWpjxUsm_mIyvFvM3GjmnruGoq9_hHlFIIC87Is0EXeS6YaCH_GdTVlQjCL3KpVrpmUO3LAiRQAKip4_OkotVWe0ItuWBi-3jBPkNz009NyWyhQsqcV6h99dMKawLjdZ7tjxwg';

  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${MY_TOKEN}`
    },
  }

  try{
    const response = await axios.get('https://api.spacetraders.io/v2/my/agent', options);

    if (!response.data)
    {
      throw new Error(`API request failed with status ${response.status}`)
    }
    return response.data.data as IAccountData;
  }
  catch(err)
  {
    console.error(err);
    return undefined;
  }
}