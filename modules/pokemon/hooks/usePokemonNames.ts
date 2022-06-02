import {usePokemonIndex} from "../queries/pokemon";

interface ReturnValue {
    names: string[] | null
    fetchNextPokemons: () => void
    hasMorePokemons: boolean
    isFetchingNextPokemons: boolean
}

export const usePokemonNames = (): ReturnValue => {
    const query = usePokemonIndex()

    const names =
        query.data?.pages
            .flatMap((page) =>
                page.results
                    .map(({name}) => name)
            )

    return {
        names: names || null,
        fetchNextPokemons: query.fetchNextPage,
        hasMorePokemons: query.hasNextPage,
        isFetchingNextPokemons: query.isFetchingNextPage,
    }
}