/*

import { useState } from 'react'
import './App.css'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyTitle from './components/MyTitle'


import PokemonCard from './components/PokemonCard'
import NavBar from "./components/NavBar";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const handlePrevious = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const handleNext = (index) => {
    if (pokemonIndex < index) {
      setPokemonIndex(pokemonIndex + 1);
    } else {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const currentPokemon = pokemonList[pokemonIndex]
  const hasPrevious = pokemonIndex > 0;
  const hasNext = pokemonIndex < pokemonList.length - 1;

  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        currentIndex={pokemonIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
      />
      <PokemonCard pokemon={currentPokemon} />
    </div>
  );
}

export default App;
*/