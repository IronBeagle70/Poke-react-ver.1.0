import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPokemonRequests } from '../api/pokemon';

const pokeContext = createContext();

export const usePoke = () =>{
    const context= useContext(pokeContext);
    return context;
};


function PokemonProvider({children}) {

    const [pokemon, setPokemon] = useState([]);
    const [nextPokemon, setNextPokemon] = useState(1);

    const getPokemon= async ()=>{
        const res = await getPokemonRequests(nextPokemon);
        setPokemon(res.data);
        // console.log(res.data);
        // return res.data;
    };

    const handleNext = () =>{
        setNextPokemon(nextPokemon+1);
        // console.log(nextPokemon);
        getPokemon(nextPokemon);
        // console.log(nextPokemon);
    };

    const handlePrev=()=>{
        setNextPokemon(nextPokemon-1);
        getPokemon(nextPokemon);
    };

    useEffect(()=>{
        getPokemon();
    }, [nextPokemon]);
    

    return (
        <pokeContext.Provider value={{
            pokemon,
            handleNext,
            nextPokemon,
            handlePrev
        }}
        
        >
            {children}
        </pokeContext.Provider>
    );
};

export default PokemonProvider;