import React from "react";

const Pokecard = ({ pokemons }) => {

  const POKE_API = 'https://raw.githubusercontent.com/' +
    'PokeAPI/sprites/master/sprites/pokemon/';

  return (
    <div>
      {pokemons.map(i => (


        <div>
          <h4>{i.name}</h4>

          <img src={`${POKE_API}${i.id}.png`}/>
          
          <ul>
            <li> {i.type} </li>
            <li> {i.base_experience} </li>
          </ul>

        </div>
      )
      )}
    </div>

  )
}

export default Pokecard;



