/*
import React from "react";
import PropTypes from "prop-types";

function NavBar({pokemonList, currentIndex, onPrevious, onNext, hasPrevious, hasNext }) {
  return (
    <div>
      {hasPrevious && <button onClick={onPrevious}>Précédent</button>}
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => currentIndex !== index && onNext(index)}>
          {pokemon.name}
        </button>
      ))}
      {hasNext && <button onClick={onNext}>Suivant</button>}
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
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
};

export default NavBar;
*/