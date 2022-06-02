import PokeAPI, {INamedApiResourceList, IPokemon} from "pokeapi-typescript";
import {useInfiniteQuery, useQuery} from "react-query";
import {buildQueryKeyForPokemon, QUERY_KEYS} from "../utils/queryKeys";
import {http} from "common/utils/http";

const POKEMON_LIMIT = 20
const INITIAL_URL = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${POKEMON_LIMIT}`

const fetchPokemons = async ({pageParam = INITIAL_URL}) => {
    const res = await http<INamedApiResourceList<IPokemon>>(pageParam)
    return {results: res.results, nextPage: res.next, previousPage: res.previous}
}

export const usePokemonIndex = () => {
    return useInfiniteQuery(
        QUERY_KEYS.POKEMON_POKEMONS,
        fetchPokemons,
        {
            getNextPageParam: (lastPage) => lastPage.nextPage,
            getPreviousPageParam: (lastPage) => lastPage.previousPage
        }
    )
}

const fetchAllPokemons = () => PokeAPI.Pokemon.listAll()

export const usePokemonAll = () => {
    return useQuery(
        QUERY_KEYS.POKEMON_POKEMONS_FULL_LIST,
        fetchAllPokemons
    )
}

const fetchPikachu = (name: string) => PokeAPI.Pokemon.fetch(name)

export const usePokemonGet = (name: string) => {
    return useQuery(
        buildQueryKeyForPokemon(name),
        () => fetchPikachu(name)
    )
}