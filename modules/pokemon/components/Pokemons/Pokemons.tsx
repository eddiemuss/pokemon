import PokemonCard from "./PokemonCard";
import {usePokemons} from "../../hooks/usePokemons";

const Pokemons = () => {
    const {pokemons} = usePokemons()

    return Boolean(pokemons) && (
        <>
            {
                pokemons.map((pokemon) => <PokemonCard key={pokemon.name} pokemonName={pokemon.name}/>)
            }
        </>
    )
}

export default Pokemons