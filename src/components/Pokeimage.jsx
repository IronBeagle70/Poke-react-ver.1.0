import React, {useState} from 'react'
import { usePoke } from '../context/PokeContext';
import Pad from './Pad';

function Pokeimage() {

    // const [nextPokemon, setNextPokemon] = useState(1);

    const { pokemon, nextPokemon } = usePoke();

    // const handleNext =()=>{
    //     setNextPokemon(nextPokemon+1);
    //     // console.log(nextPokemon);
    //     getPokemon(nextPokemon);
    // };

    // const handlePrev=()=>{
    //     setNextPokemon(nextPokemon-1);
    //     getPokemon(nextPokemon);
    // };

    // console.log(nextPokemon);


    if(pokemon.length===0){
        return <h1>Loading ...</h1>
    } else {
        // console.log(pokemon.types[0].type.name);
        // pokemon.types.map(type =>(
        //     console.log(type.type.name)
        // ));
        return (
            <div className='bg-poke-red bg-gradient-to-tr from-poke-new-red-img w-[400px] h-[608px] flex flex-col  rounded-2xl  ' >
                <div className='flex mb-2 '>
                    <div className='relative'>
                        <div className='w-20 h-20 rounded-full bg-poke-blue-img  border-solid border-4 border-poke-white-img relative my-2 mx-7'>
                            <div className='w-6 h-6 rounded-full bg-poke-sky-img absolute left-2 top-3 '></div>
                        </div>
                        <div className='trapecio-1 absolute'></div>
                    </div>
                    <div className='flex flex-col justify-between relative w-16'>
                        <div className='flex mt-4 justify-evenly'>
                            <div className='w-4 h-4 rounded-full bg-poke-new-red-img relative'>
                                <div className='w-2 h-2 rounded-full bg-white absolute left-[2px] top-[2px]'></div>
                            </div>
                            <div className='w-4 h-4 rounded-full bg-poke-new-yellow-img relative'>
                                <div className='w-2 h-2 rounded-full bg-white absolute left-[2px] top-[2px]'></div>
                            </div>
                            <div className='w-4 h-4 rounded-full bg-poke-new-green-img relative'>
                                <div className='w-2 h-2 rounded-full bg-white absolute left-[2px] top-[2px]'></div>
                            </div>
                            
                        </div>
                        <div className='trapecio-2 absolute bottom-0'>
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='w-[200px] h-11'></div>
                        <div className='w-[212px] h-3 bg-poke-new-red-top absolute right-0' ></div>
                    </div>
                </div>
                <div className='  mx-auto bg-poke-white-img p-8 rounded relative my-3 border-b-4 border-poke-border-button'>
                    <div className='flex flex-row items-center justify-evenly absolute top-[10px] left-0 right-0'>
                        <div className='w-3 h-3 rounded-full bg-poke-red'></div>
                        <div className='w-3 h-3 rounded-full bg-poke-red'></div>
                    </div>
                    <div className='bg-poke-blue w-64 h-64 bg-gradient-to-tl from-poke-white-img'>
                        <img className='border-solid border-4 border-poke-black-img' src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon_img" />
                    </div>
                    <div className='flex flex-row items-center justify-between absolute w-64 mt-1'>
                        <div className='w-6 h-6 rounded-full bg-poke-red'></div>
                        <div className='flex flex-col'>
                            <div className='w-6 h-1 rounded bg-poke-black-img'></div>
                            <div className='w-6 h-1 rounded bg-poke-black-img mt-[2px]'></div>
                            <div className='w-6 h-1 rounded bg-poke-black-img mt-[2px]'></div>
                            <div className='w-6 h-1 rounded bg-poke-black-img mt-[2px]'></div>
                        </div>
                    </div>
                </div>
                {/* <img src={pokemon.sprites.versions["generation-viii"].icons.front_default} alt="pokemon_img" /> */}
                <div className='flex h-44'>
                    <div className='w-12 h-12 rounded-full bg-poke-black-img bg-gradient-to-b from-neutral-600 border-solid border-2 border-poke-new-black-img my-2 mx-6' ></div>
                    <div className='flex flex-col w-32' >
                        <div className='flex justify-between mt-2 mb-6'>
                            <div className='w-12 h-3 rounded bg-poke-black-img bg-gradient-to-br from-neutral-600 border-solid border-2 border-poke-new-black-img ' ></div>
                            <div className='w-12 h-3 rounded bg-poke-blue-img bg-gradient-to-br from-sky-400 border-solid border-[1px] border-poke-new-black-img' ></div>
                        </div>
                        <div className='flex justify-center'>
                            <h1 className='bg-poke-green bg-gradient-to-b via-poke-new-green-img from-green-600 py-4 w-28 rounded-md text-center border-solid border-[1px] border-poke-new-black-img flex items-center justify-center text-base font-poke-font font-semibold text-poke-white-img' >nro. {nextPokemon}</h1>
                        </div>
                    </div>
                    <div className='flex items-start justify-center mx-auto' >
                        <Pad />
                    </div>
                    
                </div>
            </div>
        );
    };
};

export default Pokeimage;