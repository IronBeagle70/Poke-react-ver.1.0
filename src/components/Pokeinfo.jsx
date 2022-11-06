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
            <div className='bg-poke-red bg-gradient-to-tl from-poke-new-red-img w-[400px] h-[504px] mt-14 rounded-2xl px-10 flex flex-col justify-evenly rounded-tl-none relative'>
                <div className='h-12 w-[212px] bg-poke-red absolute left-0 top-[-48px] flex items-end justify-end'>
                    <div className='triangulo absolute -right-10'></div>
                </div>
                <div className='trapecio-3 absolute top-[-29px] left-[189.4px]'>
                </div> 
                <div className='bg-poke-black-img bg-gradient-to-br from-neutral-600 p-2 rounded-lg border-solid border-2 border-poke-new-black-img flex flex-col items-center'>
                    <p className='mb-2 font-poke-font font-semibold text-poke-white-img'>{pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}</p>
                    <p className='mb-2 font-poke-font font-semibold text-poke-white-img'>Type {pokemon.types.map(type =>(
                            `${type.type.name}`
                    ))}</p>
                    <p className='font-poke-font font-semibold text-poke-white-img'>{(specie.flavor_text_entries[1].flavor_text).replace("\f"," ")}</p>
                </div>
                <div className='grid grid-cols-5'>
                    {numbers.map(number=>(
                        <Button manejarClick={addPokeValue} key={number.toString()} >{number}</Button>
                    ))}
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <div className='bg-poke-white-img h-12 p-1 w-16 rounded-l border-r-2 border-b-2 border-poke-border-button flex items-center justify-center'>
                            <p className='font-poke-font font-semibold text-poke-black-img'>{pokeValue}</p>
                        </div>
                        <button onClick={handleSubmit} className='bg-poke-white-img h-12 p-1 w-16 rounded-r border-l-2 border-b-2 border-poke-border-button hover:bg-zinc-300 flex items-center justify-center'><div className='h-4 w-4 bg-poke-border-button rounded-full mr-[2px]'></div></button>
                    </div>
                    <div className='relative flex flex-col items-end'>
                        <div className='flex'>
                            <div className='w-12 h-3 rounded bg-poke-black-img bg-gradient-to-br from-neutral-600 border-solid border-2 border-poke-new-black-img mr-4' ></div>
                            <div className='w-12 h-3 rounded bg-poke-black-img bg-gradient-to-br from-neutral-600 border-solid border-2 border-poke-new-black-img ' ></div>
                        </div>
                        <div className='h-3 w-3 rounded-full bg-poke-white-btn absolute top-9 right-8'></div>
                        <div className='h-10 w-10 rounded-full bg-poke-yellow-btn border-solid border-[1px] border-poke-new-black-img mt-4 mr-2'  ></div>
                    </div>
                </div>
                <div className='flex justify-between items-center mb-6'>
                    <div className='bg-poke-black-img bg-gradient-to-tr from-neutral-600 p-2 h-[50px] h rounded-lg border-solid border-2 border-poke-new-black-img flex items-center justify-center'>
                        <p className='font-poke-font font-semibold text-poke-white-img'>{specie.genera[7].genus}</p>
                    </div>
                    <div className='bg-poke-black-img bg-gradient-to-tr from-neutral-600 p-1 rounded-lg border-solid border-2 border-poke-new-black-img flex items-center'>
                        <img className='w-12 h-[38px]' src={pokemon.sprites.versions["generation-vii"].icons.front_default} alt="pokemon_img" />
                    </div>
                </div>
            </div>
        );
    }
};

export default Pokeinfo;