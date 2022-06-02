import {IPokemon} from "pokeapi-typescript";
import pokemonUtil from "../utils/pokemonUtil";
import {BasePokemon} from '../interfaces/Pokemon'
import {usePokemonGet} from "../queries/pokemon";

const getBasePokemon = (pokemon: IPokemon): BasePokemon => {
    if (!pokemon) return null
    const PokemonUtil = pokemonUtil(pokemon)

    return {
        name: pokemon.name,
        hp: PokemonUtil.getHp(),
        type: PokemonUtil.getType(),
        moves: PokemonUtil.getFirstMoves(),
        image: PokemonUtil.getImage(),
    }
}

interface ReturnValue {
    pokemon: BasePokemon | null
    isLoading: boolean
}

export const usePokemon = (name: string): ReturnValue => {
    const pokemon = usePokemonGet(name)

    return {
        pokemon: getBasePokemon(pokemon.data),
        isLoading: pokemon.isLoading,
    }
}