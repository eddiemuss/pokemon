export const QUERY_KEYS = {
    POKEMON_POKEMONS: ['pokemon', 'pokemons'],
} as const

export const buildQueryKeyForPokemon = (name: string) => ['pokemon', name]