import React, { useState } from 'react';
import { getPokemonRequests } from '../api/pokemon';

import { usePoke } from '../context/PokeContext';
import Button from './Button';

function Pokeinfo() {

    const { pokemon, addPokeValue , pokeValue, handleSubmit, specie } = usePoke();

    // const [pokeValue, setPokeValue] = useState('');

    // const addPokeValue = (val) => {
    //     setPokeValue(pokeValue + val );
    // };

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
            <div className='bg-slate-800 w-[400px] h-[600px]'> 
                <p>{pokemon.name}</p>
                <p>Type {pokemon.types.map(type =>(
                        `${type.type.name} `
                ))}</p>
                <p>{(specie.flavor_text_entries[1].flavor_text).replace("\f"," ")}</p>

                {numbers.map(number=>(
                    <Button manejarClick={addPokeValue} key={number.toString()} >{number}</Button>
                ))}
                <button onClick={handleSubmit} >Search</button>

                <p>{specie.genera[7].genus}</p>
                <img src={pokemon.sprites.versions["generation-vii"].icons.front_default} alt="pokemon_img" />
                
                <p>{pokeValue}</p>
                {/* {console.log(typeof pokeValue)} */}
                
                
                {console.log(specie.flavor_text_entries[1].flavor_text)}
            </div>
        );
    }
};

export default Pokeinfo;