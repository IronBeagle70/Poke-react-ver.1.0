import React from 'react';

import '../components/pad.css';
import { usePoke } from '../context/PokeContext';

function Pad() {

    const { handleNext, handlePrev, nextPokemon } = usePoke();
    return (
        <div className="wrapper pad ">
            <div className="center pad bg-gradient-to-tl from-neutral-600">
                <div className="center-circle pad"></div>
            </div>
            
            <div className="up direction pad rounded-t-md bg-gradient-to-t from-neutral-600">
                <div className="up-triangle pad"></div>
            </div>

            <div className="right direction pad bg-gradient-to-r from-neutral-600 hover:bg-poke-new-black-img active:bg-zinc-700 rounded-r-md">
                {/* {nextPokemon>1?'mayor':'menor'} */}
                <button onClick={handleNext} className="right-triangle pad"></button>
            </div>
            <div className="down direction pad rounded-b-md bg-gradient-to-b from-neutral-600">
                <div className="down-triangle pad"></div>
            </div>

            <div className="left direction pad bg-gradient-to-l from-neutral-600 hover:bg-poke-new-black-img active:bg-zinc-700 rounded-l-md">
                <button onClick={nextPokemon>1?handlePrev:null} className="left-triangle pad"></button>
            </div>
        </div>
    );
};

export default Pad;