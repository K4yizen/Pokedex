

function PokemonCard (props) {
   // const pokemon = pokemonList[0]; 
   console.log(props.pokemonList) 
    return(
        
    <figure className="card">
       {props.pokemonList.imgSrc ? <img className="card-img" src={props.pokemonList.imgSrc} alt ={props.pokemonList.name}/> : <p>???</p>}
        <figcaption>{props.pokemonList.name}</figcaption>
    </figure>)

};

export default PokemonCard;