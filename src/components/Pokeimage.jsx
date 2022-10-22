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
            <div>
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon_img" />
                {/* <img src={pokemon.sprites.versions["generation-viii"].icons.front_default} alt="pokemon_img" /> */}
                <h1>nro. {nextPokemon}</h1>
                <button onClick={handleNext} >Next</button>
                <button onClick={handlePrev} >Prev</button>
            </div>
        );
    };
};

export default Pokeimage;