import React from 'react'
import { usePoke } from '../context/PokeContext';

function Pokeimage() {
    const {pokemon} = usePoke();

    
    if(pokemon.length===0){
        return <h1>esta vacio</h1>
    } else {
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt="pokemon_img" />
                <h1>{pokemon.name}</h1>
            </div>
        );
    };
};

export default Pokeimage;