import { RandomFact } from "./RandomFact";
// import { CachedFact } from "./CachedFact";

export function App() {
  return (
    <>
      <h1>Useless Facts</h1>

      <h1>Opdracht 1 - Using generated client</h1>
      <small>Zorg dat een random fact wordt getoond bij het ophalen van een query</small>
      <RandomFact />

      <hr />

      {/* <h1>Opdracht 2 - Using Tanstack</h1>
      <small>De twee componenten dienen dezelfde random fact te tonen, die maar één keer wordt opgehaald</small>
      <CachedFact title="Component 1" />
      <CachedFact title="Component 2" /> */}
    </>
  );
}
