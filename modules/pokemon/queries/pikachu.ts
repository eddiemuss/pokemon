import PokeAPI from "pokeapi-typescript";
import {useQuery} from "react-query";
import {QUERY_KEYS} from "../utils/queryKeys";

const fetchPikachu = () => PokeAPI.Pokemon.fetch("pikachu")

export const usePikachuGet = () => {
    return useQuery(
        QUERY_KEYS.POKEMON_PICACHU,
        fetchPikachu
    )
}