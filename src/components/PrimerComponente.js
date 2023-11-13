import React, {useState} from 'react'

export const PrimerComponente = () => {
  //let name = "Stefani Ocampo";

  const [name, setName] = useState("Stefany Ocampo");

  let adress = "Avenida a mi Corazón # Unico";

  const cambiarPersona = (newName) => {
    setName(newName);
  }

  return (
    <div align="left">
      <p>La dueña de mi corazón es: <div className={name.length >=7 ? 'verde' : 'rojo'}>{name}</div></p>

      <p>Su dirección es: <b>{adress}</b></p>

      <input type="text" onChange={e=>cambiarPersona(e.target.value)} placeholder='Escribe Persona'></input><button onClick={ e => cambiarPersona("Alejandro Mosquera")}>Cambiar persona</button>
    </div>
  )
}
