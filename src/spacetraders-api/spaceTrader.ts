import axios from "axios";
import { AccountData, Waypoint } from "../interface/interfaces";


const MY_TOKEN: string = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU1A0Q0VfTk9NQUQiLCJ2ZXJzaW9uIjoidjIuMi4wIiwicmVzZXRfZGF0ZSI6IjIwMjQtMDQtMjgiLCJpYXQiOjE3MTQ4MDk4ODIsInN1YiI6ImFnZW50LXRva2VuIn0.a-A1qeRgPokAm5tJqrp06nfxxNkFcNxBxKkEptzDWc2H7tc4llnTg5uWu-6sJW1NlzVKaMko1ukKofaFs9o5LdtytgGFLXm02lUSpt413n9X_Pt6fgR-2JLC9vGW8SirVGGcsFvg22B5Tvbyu4sBHkWvfAxQp0yqiLYfNNCcqeagThe5FtnoTuLCF-ueIkIVfy4UvTxUekzfw57-OWpjxUsm_mIyvFvM3GjmnruGoq9_hHlFIIC87Is0EXeS6YaCH_GdTVlQjCL3KpVrpmUO3LAiRQAKip4_OkotVWe0ItuWBi-3jBPkNz009NyWyhQsqcV6h99dMKawLjdZ7tjxwg';


// export async function createAgent()
// {
//   const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     symbol: "SP4CE_NOMAD",
//     faction: "COSMIC",
//   }),
// };

//   const response = await 
//     fetch('https://api.spacetraders.io/v2/register', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

//   return response;
// }

export async function getDetails(): Promise<AccountData | undefined>
{
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization':  `Bearer ${MY_TOKEN}` 
    },
  };

  try {
    const response = await fetch('https://api.spacetraders.io/v2/my/agent', options);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const result = await response.json();
    return result.data as AccountData;

  }
  catch(err)
  {
    console.error(err);
    return undefined;
  }
}

export async function getHQWaypoint(): Promise<Waypoint | undefined>
{
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiU1A0Q0VfTk9NQUQiLCJ2ZXJzaW9uIjoidjIuMi4wIiwicmVzZXRfZGF0ZSI6IjIwMjQtMDQtMjgiLCJpYXQiOjE3MTQ4MDk4ODIsInN1YiI6ImFnZW50LXRva2VuIn0.a-A1qeRgPokAm5tJqrp06nfxxNkFcNxBxKkEptzDWc2H7tc4llnTg5uWu-6sJW1NlzVKaMko1ukKofaFs9o5LdtytgGFLXm02lUSpt413n9X_Pt6fgR-2JLC9vGW8SirVGGcsFvg22B5Tvbyu4sBHkWvfAxQp0yqiLYfNNCcqeagThe5FtnoTuLCF-ueIkIVfy4UvTxUekzfw57-OWpjxUsm_mIyvFvM3GjmnruGoq9_hHlFIIC87Is0EXeS6YaCH_GdTVlQjCL3KpVrpmUO3LAiRQAKip4_OkotVWe0ItuWBi-3jBPkNz009NyWyhQsqcV6h99dMKawLjdZ7tjxwg'
    },
  };

  try{
    const response = await fetch('https://api.spacetraders.io/v2/systems/X1-TM62/waypoints/X1-TM62-A1', options);

    if (!response.ok)
    {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const result = await response.json();
    return result.data as Waypoint;
  }
  catch(err)
  {
    console.error(err);
    return undefined;
  }
}