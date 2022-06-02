import {useState} from "react";
import useDebounce from "../../../common/hooks/useDebounce";

const INITIAL_SEARCH_STRING = ''

const useSearch = () => {
    const [searchString, setSearchString] = useState(INITIAL_SEARCH_STRING)
    const debouncedSetSearchString = useDebounce(setSearchString)

    return {searchString, setSearchString: debouncedSetSearchString}
}

export default useSearch