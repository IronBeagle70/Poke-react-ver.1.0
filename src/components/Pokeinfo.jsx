import React, { useState } from 'react';
import { getPokemonRequests } from '../api/pokemon';

import { usePoke } from '../context/PokeContext';
import Button from './Button';

function Pokeinfo() {

    const { pokemon } = usePoke();

    const [pokeValue, setPokeValue] = useState('');

    const addPokeValue = (val) => {
        setPokeValue(pokeValue + val );
    };

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     console.log(`pokemon numero ${parseInt(pokeValue)} encontrado`);
    //     // await getPokemon(parseInt(pokeValue));
    //     const res = await getPokemonRequests(pokeValue);
    //     console.log(res.data);
    //     return res.data;
    // };

    
    
    const numbers = [1,2,3,4,5,6,7,8,9,0];

    if(pokemon.length===0){
        <h1>Loading...</h1>
    } else{
        return (
            <div> 
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.versions["generation-vii"].icons.front_default} alt="pokemon_img" />
                <p>Type {pokemon.types.map(type =>(
                        `${type.type.name} `
                ))}</p>
                {numbers.map(number=>(
                    <Button manejarClick={addPokeValue} key={number.toString()} >{number}</Button>
                ))}
                <p>{pokeValue}</p>
                {/* {console.log(typeof pokeValue)} */}
                <button onClick={()=>console.log(`pokemon numero ${parseInt(pokeValue)} encontrado`)} >Search</button>
            </div>
        );
    }
};

export default Pokeinfo;