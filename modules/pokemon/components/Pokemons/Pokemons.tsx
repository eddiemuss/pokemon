import {useState} from "react";
import useDebounce from "common/hooks/useDebounce";
import Section from "common/components/TextField/Section";
import {usePokemonNames} from "../../hooks/usePokemonNames";
import useAllPokemonNames from "../../hooks/useAllPokemonNames";
import Description from './Description'
import SearchField from "./SearchField";
import PokemonList from "./PokemonList";

const INITIAL_SEARCH_STRING = ''

const Pokemons = () => {
    const {names: defaultNames} = usePokemonNames()
    const {names} = useAllPokemonNames()

    const [searchString, setSearchString] = useState(INITIAL_SEARCH_STRING)
    const debouncedSetSearchString = useDebounce(setSearchString)

    const pokemonNames = Boolean(searchString) ? names.filter((name) => name.toLowerCase().includes(searchString)) : defaultNames

    return Boolean(pokemonNames) && (
        <>
            <Description/>
            <Section>
                <SearchField onChange={debouncedSetSearchString}/>
            </Section>
            <PokemonList names={pokemonNames}/>
        </>
    )
}

export default Pokemons