import {usePokemonIndex} from "../queries/pokemon";
import {INamedApiResource, IPokemon} from "pokeapi-typescript";

interface ReturnValue {
    names: string[] | null
    fetchNextPokemons: () => void
    hasMorePokemons: boolean
    isFetchingNextPokemons: boolean
}

type Pages = { results: INamedApiResource<IPokemon>[], nextPage: string, previousPage: string }[]

const getPokemonNamesFromPages = (pages: Pages | undefined): string[] | undefined => pages?.flatMap((page) =>
    page.results
        .map(({name}) => name)
)

export const usePokemonNames = (): ReturnValue => {
    const query = usePokemonIndex()

    const names = getPokemonNamesFromPages(query.data?.pages)

    return {
        names: names || null,
        fetchNextPokemons: query.fetchNextPage,
        hasMorePokemons: query.hasNextPage,
        isFetchingNextPokemons: query.isFetchingNextPage,
    }
}