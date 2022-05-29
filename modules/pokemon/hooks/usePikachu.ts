import {usePikachuGet} from "../queries/pikachu";
import {IPokemon} from "pokeapi-typescript";

interface HP {
    value: number
    name: string
}

const getHpFromPokemon = (pokemon: IPokemon): HP => {
    const hpStatus = pokemon.stats.find(({stat}) => stat.name === 'hp')

    return {value: hpStatus.base_stat, name: hpStatus.stat.name}
}

const getTypeFromPokemon = (pokemon: IPokemon): string => pokemon.types[0].type.name

const getFirstMovesFromPokemon = (pokemon: IPokemon): string[] =>
    pokemon.moves.slice(0, 3).map(({move}) => move.name)

const getImageFromPokemon = (pokemon: IPokemon): string => pokemon.sprites.front_default


interface Pokemon {
    name: string
    hp: HP
    type: string
    moves: string[]
    image: string
}

interface ReturnValue {
    pikachu: Pokemon | null
}

const mapPokemon = (pokemon: IPokemon): Pokemon => {
    if (!pokemon) return null

    return {
        name: pokemon.name,
        hp: getHpFromPokemon(pokemon),
        type: getTypeFromPokemon(pokemon),
        moves: getFirstMovesFromPokemon(pokemon),
        image: getImageFromPokemon(pokemon)
    }
}

export const usePikachu = (): ReturnValue => {
    const pikachu = usePikachuGet()

    console.log({pikachu: pikachu.data})

    return {
        pikachu: mapPokemon(pikachu.data)
    }
}