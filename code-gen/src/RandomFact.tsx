import { useState } from "react";
import { Fact, getRandomFact } from "./generated/uselessfacts";

// OPDRACHT 1 -- Toon een random fact wanneer er op de knop wordt gedrukt
export function RandomFact() {
  
  async function handleClick() {
    
  }

  return (
    <section>
      <h2>Random fact</h2>
      <button onClick={handleClick}>Get random fact</button>
      <p>FACT HERE</p>
    </section>
  );
}
