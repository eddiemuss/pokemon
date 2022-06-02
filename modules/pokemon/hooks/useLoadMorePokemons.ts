import {useIntersectionObserver} from "react-intersection-observer-hook";
import {useEffect} from "react";

const useLoadMorePokemons = (fetchMorePokemons: () => void) => {
    const [loadMoreRef, {entry}] = useIntersectionObserver();
    const isVisible = entry && entry.isIntersecting;

    useEffect(() => {
        if (isVisible) {
            fetchMorePokemons();
        }
    }, [isVisible]);

    return loadMoreRef
}

export default useLoadMorePokemons