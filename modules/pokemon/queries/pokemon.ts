import PokeAPI from "pokeapi-typescript";
import {useQuery} from "react-query";
import {buildQueryKeyForPokemon, QUERY_KEYS} from "../utils/queryKeys";

const POKEMON_LIMIT = 20

const fetchPokemons = () => PokeAPI.Pokemon.list(POKEMON_LIMIT)

export const usePokemonIndex = () => {
    return useQuery(
        QUERY_KEYS.POKEMON_POKEMONS,
        fetchPokemons
    )
}

const fetchPikachu = (name: string) => PokeAPI.Pokemon.fetch(name)

export const usePokemonGet = (name: string) => {
    return useQuery(
        buildQueryKeyForPokemon(name),
        () => fetchPikachu(name)
    )
}