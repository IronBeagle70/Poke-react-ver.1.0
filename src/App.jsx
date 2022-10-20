// import reactLogo from './assets/react.svg'
// import './App.css'

import Pokeimage from "./components/Pokeimage";
import PokemonProvider from "./context/PokeContext";

function App() {
  
  return (
    <PokemonProvider>
      <Pokeimage />
    </PokemonProvider>
  );
};

export default App;
