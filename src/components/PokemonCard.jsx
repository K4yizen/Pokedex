import PropTypes from 'prop-types';

function PokemonCard ({pokemon}) {
   // const pokemon = pokemonList[0]; 
   console.log(pokemon) 
    return(
        
    <figure className="card">
       {pokemon.imgSrc ? <img className="card-img" src={pokemon.imgSrc} alt ={pokemon.name}/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
    </figure>)

};

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc:PropTypes.string,
    }).isRequired
  }

export default PokemonCard;