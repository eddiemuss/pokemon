import LoadingButton from '@mui/lab/LoadingButton'
import Section from "common/components/TextField/Section";
import Description from './Description'
import SearchField from "./SearchField";
import PokemonList from "./PokemonList";
import Head from './Head'
import useFilterPokemonNames from "../../hooks/useFilterPokemonNames";
import {usePokemonNames} from "../../hooks/usePokemonNames";
import useLoadMorePokemons from "../../hooks/useLoadMorePokemons";

const Pokemons = () => {
    const {pokemonNames, setPokemonName, isSearching} = useFilterPokemonNames()
    const {fetchNextPokemons, hasMorePokemons, isFetchingNextPokemons} = usePokemonNames()
    const loadMoreRef = useLoadMorePokemons(fetchNextPokemons)

    const canLoadMore = hasMorePokemons && !isSearching

    return Boolean(pokemonNames) && (
        <>
            <Head/>
            <Description/>
            <Section>
                <SearchField onChange={setPokemonName}/>
            </Section>
            <PokemonList names={pokemonNames}/>
            {canLoadMore && (
                <LoadingButton
                    ref={loadMoreRef}
                    size="small"
                    onClick={fetchNextPokemons}
                    loading={isFetchingNextPokemons}
                    variant="outlined"
                    disabled={!isFetchingNextPokemons}
                >
                    Load more pokemons
                </LoadingButton>)}
        </>
    )
}

export default Pokemons