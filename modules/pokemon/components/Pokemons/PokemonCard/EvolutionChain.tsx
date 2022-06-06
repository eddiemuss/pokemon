import useEvolutionChain from "../../../hooks/useEvolutionChain";
import EvolutionItem from "./EvolutionItem";

interface EvolutionChainProps {
    name: string
    onSelect: (name: string) => void
}

const EvolutionChain = ({name, onSelect}: EvolutionChainProps) => {
    const {baseForm, midForm, advanceForm} = useEvolutionChain(name)

    return (
        <>
            <EvolutionItem name={baseForm} isCurrentPokemon={name === baseForm} onClick={() => onSelect(baseForm)}/>
            <EvolutionItem name={midForm} isCurrentPokemon={name === midForm} onClick={() => onSelect(midForm)}/>
            <EvolutionItem name={advanceForm} isCurrentPokemon={name === advanceForm}
                           onClick={() => onSelect(advanceForm)}/>
        </>
    )
}

export default EvolutionChain