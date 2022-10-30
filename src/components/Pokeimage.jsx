import React, {useState} from 'react'
import { usePoke } from '../context/PokeContext';

function Pokeimage() {

    // const [nextPokemon, setNextPokemon] = useState(1);

    const {pokemon, handleNext, nextPokemon, handlePrev} = usePoke();

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
            <div className='bg-poke-red w-[400px] h-[600px] flex flex-col justify-center' >
                <div className='bg-poke-blue w-60 h-60 mx-auto'>
                    <img className='w-60' src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon_img" />
                </div>
                {/* <img src={pokemon.sprites.versions["generation-viii"].icons.front_default} alt="pokemon_img" /> */}
                <div className='flex justify-evenly mt-9'>
                    <h1 className='bg-poke-green p-4 w-24 rounded-md text-center' >nro. {nextPokemon}</h1>
                    <div>
                        <button onClick={handleNext} >Next</button>
                        <button onClick={handlePrev} >Prev</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default Pokeimage;