import { QueryClient } from "@tanstack/query-core"; // Pas nodig bij opdracht 2
import { Fact, getRandomFact } from "./generated/uselessfacts";



// OPDRACHT 1 -- Toon een random fact wanneer er op de knop wordt gedrukt
document.getElementById("btn-random")!.addEventListener("click", async () => {


});


// OPDRACHT 2 -- Pas decommenten wanneer de docent dat zegt;



/*
// Bij laden: twee componenten renderen
document.addEventListener("DOMContentLoaded", () =>
  Promise.all([renderComponent1(), renderComponent2()])
);


async function renderComponent1() {
  const fact = await fetchRandomFact(Infinity);
  document.getElementById('component1-output')!.innerText = fact!.text;
} 

async function renderComponent2() {
  const fact = await fetchRandomFact(Infinity);
  document.getElementById('component2-output')!.innerText = fact!.text;
} 


const queryClient = new QueryClient();

async function fetchRandomFact(staleTime: number) : Promise<Fact> {



  return result.data;
  }
*/
