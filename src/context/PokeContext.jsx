import React, { createContext, useContext, useEffect, useState } from 'react';
import { getPokemonRequests } from '../api/pokemon';

const pokeContext = createContext();

export const usePoke = () =>{
    const context= useContext(pokeContext);
    return context;
};


function PokemonProvider({children}) {

    const [pokemon, setPokemon] = useState([]);

    const getPokemon= async (pokeid=6)=>{
        const res = await getPokemonRequests(pokeid);
        setPokemon(res.data);
        // console.log(res.data);
        // return res.data;
    };

    useEffect(()=>{
        getPokemon();
    }, []);
    
    return (
        <pokeContext.Provider value={{
            pokemon
        }}
        
        >
            {children}
        </pokeContext.Provider>
    );
};

export default PokemonProvider;