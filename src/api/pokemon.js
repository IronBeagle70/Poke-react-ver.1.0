import axios from "axios";

export const getPokemonRequests= async (id) => await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);