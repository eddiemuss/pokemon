import {usePokemonAll} from "../queries/pokemon";
import {usePokemonNames} from "./usePokemonNames";

interface ReturnValue {
    names: string[] | null
}

const useAllPokemonNames = (): ReturnValue => {
    const {data} = usePokemonAll()
    const {names: defaultNames} = usePokemonNames()

    return {
        names: data?.results.map(({name}) => name) || defaultNames || null
    }
}

export default useAllPokemonNames