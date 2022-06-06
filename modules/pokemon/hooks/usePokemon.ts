import {IPokemon} from "pokeapi-typescript";
import pokemonUtil from "../utils/pokemonUtil";
import {BasePokemon} from '../interfaces/Pokemon'
import {usePokemonGet} from "../queries/pokemon";
import {useState} from "react";

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
    setNewPokemon: (name: string) => void
}

export const usePokemon = (name: string): ReturnValue => {
    const [pokemonName, setPokemonName] = useState(name)
    const pokemon = usePokemonGet(pokemonName)

    return {
        pokemon: getBasePokemon(pokemon.data),
        isLoading: pokemon.isLoading,
        setNewPokemon: (name) => {
            console.log({name});
            setPokemonName(name)
        },
    }
}