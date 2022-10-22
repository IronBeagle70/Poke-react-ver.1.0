import React, { useState } from 'react';

import { usePoke } from '../context/PokeContext';
import Button from './Button';

function Pokeinfo() {

    const { pokemon } = usePoke();

    const [pokeValue, setPokeValue] = useState('');

    const addPokeValue = (val) => {
        setPokeValue(pokeValue + val );
    };

    
    const numbers = [1,2,3,4,5,6,7,8,9,0];

    if(pokemon.length===0){
        <h1>Loading...</h1>
    } else{
        return (
            <div>
                <img src={pokemon.sprites.versions["generation-vii"].icons.front_default} alt="pokemon_img" />
                <p>Type {pokemon.types.map(type =>(
                        `${type.type.name} `
                ))}</p>
                {numbers.map(number=>(
                    <Button manejarClick={addPokeValue} key={number.toString()} >{number}</Button>
                ))}
                <p>{pokeValue}</p>
                <button>Search</button>

            </div>
        );
    }
};

export default Pokeinfo;