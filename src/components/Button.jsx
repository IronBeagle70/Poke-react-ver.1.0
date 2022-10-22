import React from 'react';

function Button(props) {
    
    // const handleChange=(e)=>{
    //     e.preventDefault();
    //     addPokeValue(e.target.value);
    //     // console.log(e.target.value);
    //     console.log(pokeValue);
    // }

    return (
        <button onClick={ () => props.manejarClick(props.children)} value={props.children} className='bg-slate-600 m-2 p-2 rounded'>
            {props.children}
        </button>
    );
};

export default Button;