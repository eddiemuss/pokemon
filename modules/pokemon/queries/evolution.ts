import {IEvolutionChain} from "pokeapi-typescript";
import {useQuery} from "react-query";
import {buildQueryKeyForEvolutionChain} from "../utils/queryKeys";
import {http} from "common/utils/http";

export const fetchEvolutionChain = async (url: string) => http<Promise<IEvolutionChain>>(url)

interface Options {
    enabled?: boolean
}

export const useEvolutionChainGet = (url: string, options: Options = {}) => {
    return useQuery(
        buildQueryKeyForEvolutionChain(url),
        () => fetchEvolutionChain(url),
        {
            staleTime: Infinity,
            ...options
        }
    )
}