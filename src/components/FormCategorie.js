import React, { useState } from "react";

export default function FormCategoria() {
  const [nombreCat, setnombreCat] = useState("");

  return (
    <>
      <h2> Formulario </h2>
      <form>
        <label htmlFor="name"> Categoria</label>
        <input
          type="text"
          id="name"
          name="name"
          value={nombreCat}
          onChange={(e) => setnombreCat(e.target.value)}
        />
      </form>
    </>
  );
}
