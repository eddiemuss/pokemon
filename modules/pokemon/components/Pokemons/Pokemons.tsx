import PokemonCard from "./PokemonCard";
import {usePokemons} from "../../hooks/usePokemons";

const Pokemons = () => {
    const {pokemons} = usePokemons()

    return Boolean(pokemons) && (
        <div className="flex flex-row flex-wrap">
            {
                pokemons.map((pokemon) => <PokemonCard key={pokemon.name} pokemonName={pokemon.name}/>)
            }
        </div>
    )
}

export default Pokemons