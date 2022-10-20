import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPokemonRequests } from '../api/pokemon';

const pokeContext = createContext();

export const usePoke = () =>{
    const context= useContext(pokeContext);
    return context;
};


function PokemonProvider({children}) {

    const [pokemon, setPokemon] = useState();
    // console.log(pokemon);

    const getPokemon= async (pokeid=6)=>{
        const res = await getPokemonRequests(pokeid);
        // console.log(res.data);
        setPokemon(res.data);
        console.log(res.data.sprites.front_default);
    };

    useEffect(()=>{
        getPokemon();
    }, []);

    return (
        <pokeContext.Provider value={{
            pokemon,
            getPokemon
        }}>
            {children}
        </pokeContext.Provider>
    );
};

export default PokemonProvider;