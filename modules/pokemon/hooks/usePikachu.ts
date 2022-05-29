import {usePikachuGet} from "../queries/pikachu";
import {IPokemon} from "pokeapi-typescript";
import pokemonUtil from "../utils/pokemonUtil";
import {BasePokemon} from '../interfaces/Pokemon'

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
}

export const usePikachu = (): ReturnValue => {
    const pikachu = usePikachuGet()

    console.log({pikachu: pikachu.data})

    return {
        pokemon: getBasePokemon(pikachu.data)
    }
}