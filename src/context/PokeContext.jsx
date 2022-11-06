import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPokemonRequests, getPokemonSpeciesRequests } from '../api/pokemon';

const pokeContext = createContext();

export const usePoke = () =>{
    const context= useContext(pokeContext);
    return context;
};

function PokemonProvider({children}) {

    const [pokemon, setPokemon] = useState([]);
    const [specie, setSpecie] = useState([]);
    const [nextPokemon, setNextPokemon] = useState(1);

    // get functions
    const getPokemon= async ()=>{
        const res1 = await getPokemonRequests(nextPokemon);
        const res2 = await getPokemonSpeciesRequests(nextPokemon);
        setPokemon(res1.data);
        // console.log(res2.data);
        setSpecie(res2.data);
        // console.log(pokemon);
        // console.log(specie);
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
        // console.log(parseInt(pokeValue));
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
            handleSubmit,
            specie
        }}
        
        >
            {children}
        </pokeContext.Provider>
    );
};

export default PokemonProvider;