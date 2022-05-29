import useAllPokemonNames from "../../hooks/useAllPokemonNames";
import TextField from 'common/components/TextField'
import Autocomplete from "@mui/material/Autocomplete";
import {FCReturnValue} from "common/interfaces/return";

interface Props {
    onChange: (value: string) => void
}

const SearchField = (props: Props): FCReturnValue => {
    const {names} = useAllPokemonNames()

    return (
        <Autocomplete
            id="pokemon-name-search"
            freeSolo
            options={names}
            renderInput={(params) => <TextField {...params} onChange={props.onChange} label="Pokemon"/>}
            disabled={!names}
            onSelect={(event) => props.onChange(event.target.value)}
        />
    )
}

export default SearchField