import React from "react";
import PropTypes from "prop-types";

function NavBar({pokemonList, currentIndex, onNext}) {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => currentIndex !== index && onNext(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default NavBar;
