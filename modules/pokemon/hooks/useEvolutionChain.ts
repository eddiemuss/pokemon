import {useEvolutionChainGet} from "../queries/evolution";
import {usePokeSpeciesGet} from "../queries/pokemon";

interface EvolutionChainReturnType {
    baseForm: string
    midForm: string
    advanceForm: string
}

const useEvolutionChain = (name: string): EvolutionChainReturnType => {
    const species = usePokeSpeciesGet(name)
    const chainUrl = species.data?.evolution_chain.url
    const {data} = useEvolutionChainGet(chainUrl, {enabled: Boolean(chainUrl)})

    return {
        baseForm: data?.chain.species.name || '',
        midForm: data?.chain.evolves_to[0].species.name || '',
        advanceForm: data?.chain.evolves_to[0].evolves_to[0]?.species.name || ''
    }
}
export default useEvolutionChain