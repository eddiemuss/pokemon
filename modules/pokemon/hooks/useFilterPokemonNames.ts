import {useMemo} from "react";
import {usePokemonNames} from "./usePokemonNames";
import useAllPokemonNames from "./useAllPokemonNames";
import useSearch from "./useSearch";

const useFilterPokemonNames = () => {
    const {names: defaultNames} = usePokemonNames()
    const {names} = useAllPokemonNames()
    const {searchString, setSearchString} = useSearch()

    const pokemonNames = useMemo(() =>
            Boolean(searchString) ? names.filter((name) => name.toLowerCase().includes(searchString)) : defaultNames
        , [searchString, names, defaultNames]
    )

    return {pokemonNames, isSearching: Boolean(searchString), setPokemonName: setSearchString}
}

export default useFilterPokemonNames