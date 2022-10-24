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

    const [pokeValue, setPokeValue] = useState('');

    const addPokeValue = (val) => {
        setPokeValue(pokeValue + val );
        // console.log(pokeValue);
        // getPokemon(pokeValue);
        getPokemon(parseInt(pokeValue));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // console.log(getPokemon(pokeValue));
        setPokeValue('');
        console.log(parseInt(pokeValue));
        setNextPokemon(parseInt(pokeValue));
    };

    useEffect(()=>{
        getPokemon();
    }, [nextPokemon]);



    return (
        <pokeContext.Provider value={{
            pokemon,
            handleNext,
            nextPokemon,
            handlePrev,
            getPokemon,
            addPokeValue,
            pokeValue,
            handleSubmit
        }}
        
        >
            {children}
        </pokeContext.Provider>
    );
};

export default PokemonProvider;