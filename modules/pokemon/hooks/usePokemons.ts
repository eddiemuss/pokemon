import {INamedApiResource, IPokemon} from "pokeapi-typescript";
import pokemonUtil from "../utils/pokemonUtil";
import {BasePokemon} from '../interfaces/Pokemon'
import {usePokemonGet, usePokemonIndex} from "../queries/pokemon";

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
    pokemons: INamedApiResource<IPokemon>[] | null
}

export const usePokemons = (): ReturnValue => {
    const query = usePokemonIndex()
    console.log({query})

    const pokemons = query.data?.results || null

    return {
        pokemons,
    }
}