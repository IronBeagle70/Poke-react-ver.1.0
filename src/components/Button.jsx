import React from 'react';

function Button(props) {
    
    // const handleChange=(e)=>{
    //     e.preventDefault();
    //     addPokeValue(e.target.value);
    //     // console.log(e.target.value);
    //     console.log(pokeValue);
    // }

    return (
        <button onClick={ () => props.manejarClick(props.children)} value={props.children} className={`bg-poke-blue bg-gradient-to-tl from-sky-300 h-16 w-16 p-2 border-solid border-b-4 border-r-4 border-poke-border-pad 
        ${props.children==1?'rounded-tl-md':''}
        ${props.children==5?'rounded-tr-md border-r-0':''}
        ${props.children==6?'rounded-bl-md':''}
        ${props.children==0?'rounded-br-md border-r-0':''}
        hover:bg-poke-border-pad transition-all font-poke-font font-semibold text-poke-new-black-img active:text-poke-white-img`}>
            {props.children}
        </button>
    );
};

export default Button;