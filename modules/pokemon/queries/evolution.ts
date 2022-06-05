import PokeAPI, {IEvolutionChain} from "pokeapi-typescript";
import {useQuery} from "react-query";
import {buildQueryKeyForEvolutionChain} from "../utils/queryKeys";
import {http} from "common/utils/http";

export const fetchEvolutionChain = async (name: string) => {
    const {evolution_chain: {url}} = await PokeAPI.PokemonSpecies.fetch(name)
    return http<Promise<IEvolutionChain>>(url)
}

export const useEvolutionChainGet = (name: string) => {
    return useQuery(
        buildQueryKeyForEvolutionChain(name),
        () => fetchEvolutionChain(name),
        {
            staleTime: Infinity,
        }
    )
}