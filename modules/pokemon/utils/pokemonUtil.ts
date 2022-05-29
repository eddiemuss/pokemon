import {IPokemon} from "pokeapi-typescript"
import {HP} from "../interfaces/Pokemon";

const pokemonUtil = (pokemon: IPokemon) => {
    const getHp = (): HP => {
        const hpStatus = pokemon.stats.find(({stat}) => stat.name === 'hp')

        return {value: hpStatus.base_stat, name: hpStatus.stat.name}
    }

    const getType = (): string => pokemon.types[0].type.name

    const getFirstMoves = (): string[] =>
        pokemon.moves.slice(0, 3).map(({move}) => move.name)

    const getImage = (): string => pokemon.sprites.front_default

    return {
        getHp,
        getType,
        getFirstMoves,
        getImage,
    }
}

export default pokemonUtil