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
        return (
            <div>
                <img src={pokemon.sprites.front_default} alt="pokemon_img" />
                <h1>{pokemon.name} numero {nextPokemon}  </h1>
                <button onClick={handleNext} >Next</button>
                <button onClick={handlePrev} >Prev</button>
            </div>
        );
    };
};

export default Pokeimage;