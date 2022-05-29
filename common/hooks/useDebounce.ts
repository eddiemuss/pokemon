import {debounce, DebouncedFunc} from "lodash";
import {useEffect, useMemo} from "react";

const DELAY = 300

const useDebounce = <T extends (props: any) => any>(func: T): DebouncedFunc<T> => {
    const debouncedFunc = useMemo(() => debounce(func, DELAY), [])

    useEffect(() => () => debouncedFunc.cancel(), [])

    return debouncedFunc
}

export default useDebounce