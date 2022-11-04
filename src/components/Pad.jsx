import React from 'react';

import '../components/pad.css';
import { usePoke } from '../context/PokeContext';

function Pad() {

    const { handleNext, handlePrev, nextPokemon } = usePoke();
    return (
        <div className="wrapper pad ">
            <div className="center pad">
                <div className="center-circle pad"></div>
            </div>
            
            <div className="up direction pad rounded-t-md">
                <div className="up-triangle pad"></div>
            </div>

            <div className="right direction pad hover:bg-poke-new-black-img active:bg-zinc-700 rounded-r-md">
                {/* {nextPokemon>1?'mayor':'menor'} */}
                <button onClick={handleNext} className="right-triangle pad"></button>
            </div>
            <div className="down direction pad rounded-b-md">
                <div className="down-triangle pad"></div>
            </div>

            <div className="left direction pad hover:bg-poke-new-black-img active:bg-zinc-700 rounded-l-md">
                <button onClick={nextPokemon>1?handlePrev:null} className="left-triangle pad"></button>
            </div>
        </div>
    );
};

export default Pad;