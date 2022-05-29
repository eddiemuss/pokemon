import {usePikachu} from "../../hooks/usePikachu";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
    const pikachu = usePikachu()

    return Boolean(pikachu.pokemon) && (
        <>
            {[pikachu].map(PokemonCard)}
        </>
    )
}

export default Pokemons