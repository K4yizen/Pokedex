import { useState, useEffect } from 'react'
import './App.css'
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

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );

  

  const handlePreviousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const handleNextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };


  const currentPokemon = pokemonList[pokemonIndex]
  const hasPrevious = pokemonIndex > 0;
  const hasNext = pokemonIndex < pokemonList.length - 1;

  useEffect(() => {
    if (currentPokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [currentPokemon]);
  

  return (
    
    

    <div>
      <NavBar
        onPrevious={handlePreviousPokemon}
        onNext={handleNextPokemon}
        hasPrevious={hasPrevious}
        hasNext={hasNext}
        
      
      />
      <PokemonCard pokemon={currentPokemon} />
    </div>
  );
}

export default App
