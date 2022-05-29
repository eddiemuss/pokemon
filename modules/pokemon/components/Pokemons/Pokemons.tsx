import PokemonCard from "./PokemonCard";
import Section from "common/components/TextField/Section";
import {usePokemonNames} from "../../hooks/usePokemonNames";
import Description from './Description'
import SearchField from "./SearchField";
import {useState} from "react";
import useAllPokemonNames from "../../hooks/useAllPokemonNames";

const Pokemons = () => {
    const {names: defaultNames} = usePokemonNames()
    const {names} = useAllPokemonNames()
    const [searchString, setSearchString] = useState("")
    const pokemonNames = Boolean(searchString) ? names.filter((name) => name.toLowerCase().includes(searchString)) : defaultNames

    return Boolean(pokemonNames) && (
        <>
            <Description/>
            <Section>
                <SearchField onChange={setSearchString}/>
            </Section>
            <div className="flex flex-row flex-wrap justify-evenly items-start">
                {
                    pokemonNames.map((name) => <PokemonCard key={name} pokemonName={name}/>)
                }
            </div>
        </>
    )
}

export default Pokemons