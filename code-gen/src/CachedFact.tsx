// import { useQuery } from "@tanstack/react-query";
// import { Fact, getRandomFact } from "./generated/uselessfacts";

// // OPDRACHT 2 -- Pas invullen wanneer de docent dat zegt.
// // Beide componenten roepen deze hook aan: met dezelfde queryKey wordt het fact maar één keer opgehaald.
// function useRandomFact() {
//   return useQuery<Fact>({
//     queryKey: ["random-fact"],
//     queryFn: async () => {
//       // Haal het fact op met getRandomFact() en geef alleen `data` terug
//       throw new Error("Nog niet geïmplementeerd");
//     },
//     staleTime: Infinity,
//   });
// }

// export function CachedFact({ title }: { title: string }) {
//   const { data: fact, isPending, error } = useRandomFact();

//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{isPending ? "Loading..." : error ? error.message : fact.text}</p>
//     </section>
//   );
// }
