import PokemonCard from "./PokemonCard";
import {usePokemons} from "../../hooks/usePokemons";
import Description from "./Description";

const Pokemons = () => {
    const {pokemons} = usePokemons()

    return Boolean(pokemons) && (
        <>
            <Description/>
            <div className="flex flex-row flex-wrap justify-evenly items-start">
                {
                    pokemons.map((pokemon) => <PokemonCard key={pokemon.name} pokemonName={pokemon.name}/>)
                }
            </div>
        </>
    )
}

export default Pokemons