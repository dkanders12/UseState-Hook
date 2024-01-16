import React, { useState } from "react";

export const GreetingComponent = () => {
  // State variabel til at gemme navnet
  const [name, setName] = useState("World");

  // Funktion til at håndtere ændringer i input feltet
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <p>Send en hilsen til {name}</p>
      {/* Input feltet med en onChange-begivenhed, der udløser handleInputChange-funktionen */}
      <input type="text" value={name} onChange={handleInputChange} />
    </div>
  );
};
