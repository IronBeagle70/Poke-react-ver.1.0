import React from 'react'
import { usePoke } from '../context/PokeContext';

function Pokeimage() {

    const { pokemon } = usePoke();

    console.log(pokemon);

    return (
        <div>
            <img src="" alt="pokemon_img" />
            <h1>hola mundo</h1>
        </div>
    );
};

export default Pokeimage;