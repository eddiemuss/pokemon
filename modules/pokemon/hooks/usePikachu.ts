import {usePikachuGet} from "../queries/pikachu";

export const usePikachu = () => {
    const pikachu = usePikachuGet()

    return {
        pikachu: pikachu.data || null
    }
}