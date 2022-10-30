import axios from "axios";

//get pokemon endpoint
export const getPokemonRequests= async (id) => await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

//get pokemon species endpoint
export const getPokemonSpeciesRequests= async (id) => await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);