import useEvolutionChain from "../../../hooks/useEvolutionChain";
import EvolutionItem from "./EvolutionItem";

const EvolutionChain = ({name}: { name: string }) => {
    const {baseForm, midForm, advanceForm} = useEvolutionChain(name)

    return (
        <>
            <EvolutionItem name={baseForm} isCurrentPokemon={name === baseForm}/>
            <EvolutionItem name={midForm} isCurrentPokemon={name === midForm}/>
            <EvolutionItem name={advanceForm} isCurrentPokemon={name === advanceForm}/>
        </>
    )
}

export default EvolutionChain