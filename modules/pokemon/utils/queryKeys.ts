export const QUERY_KEYS = {
    POKEMON_POKEMONS: ['pokemon', 'pokemons'],
    POKEMON_POKEMONS_FULL_LIST: ['pokemon', 'pokemons-full-list'],
} as const

export const buildQueryKeyForPokemon = (name: string) => ['pokemon', name]
export const buildQueryKeyForEvolutionChain = (url: string) => ['pokemon', 'evolution-chain', url]
export const buildQueryKeyForSpecies = (name: string) => ['pokemon', 'species', name]
