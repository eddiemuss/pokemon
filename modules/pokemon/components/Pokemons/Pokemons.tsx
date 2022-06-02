import LoadingButton from '@mui/lab/LoadingButton'
import Section from "common/components/TextField/Section";
import Description from './Description'
import SearchField from "./SearchField";
import PokemonList from "./PokemonList";
import useFilterPokemonNames from "../../hooks/useFilterPokemonNames";
import {usePokemonNames} from "../../hooks/usePokemonNames";
import useLoadMorePokemons from "../../hooks/useLoadMorePokemons";

const Pokemons = () => {
    const {pokemonNames, setPokemonName} = useFilterPokemonNames()
    const {fetchNextPokemons, hasMorePokemons, isFetchingNextPokemons} = usePokemonNames()
    const loadMoreRef = useLoadMorePokemons(fetchNextPokemons)

    return Boolean(pokemonNames) && (
        <>
            <Description/>
            <Section>
                <SearchField onChange={setPokemonName}/>
            </Section>
            <PokemonList names={pokemonNames}/>
            {hasMorePokemons && (
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