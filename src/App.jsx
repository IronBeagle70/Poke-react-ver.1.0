// import reactLogo from './assets/react.svg'
// import './App.css'

import Pokeimage from "./components/Pokeimage";
import Pokeinfo from "./components/Pokeinfo";
import PokemonProvider from "./context/PokeContext";

function App() {
  
  return (
    <PokemonProvider>
      <Pokeimage />
      <Pokeinfo />
    </PokemonProvider>
  );
};

export default App;
