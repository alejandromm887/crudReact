import React from 'react';


export const SegundoComponente = () => {


  const cosas1 = ["Sus ojos", "Su cabello", "Su manera de ser", "Su valentía", "Etc..."];
  
  let poses = ["PolloAsado", "En 4tro", "69", "Etc..." ];

   

  return (
    <div>
        <h2>Cosas que amo de ella:</h2>

        <ul >
          <div>{cosas1.map((item, indice) => <li class="lista1" key={indice}>{item}</li>)}</div>
        </ul>

        <h2>Poses Favoritas</h2>

        <ul>
          {
            poses.map((pose, indice) =>{
              return (
                <li key={indice}>{pose}</li>
              )
            })
          }
        </ul>
       
    </div>

  )

  
}
