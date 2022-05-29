import {INamedApiResource, IPokemon} from "pokeapi-typescript";
import pokemonUtil from "../utils/pokemonUtil";
import {BasePokemon} from '../interfaces/Pokemon'
import {usePokemonGet, usePokemonIndex} from "../queries/pokemon";

interface ReturnValue {
    names: string[] | null
}

export const usePokemonNames = (): ReturnValue => {
    const {data} = usePokemonIndex()

    return {
        names: data?.results.map(({name}) => name) || null,
    }
}