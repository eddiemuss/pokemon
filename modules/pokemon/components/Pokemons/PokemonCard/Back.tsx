import Card from "../../../../../common/components/Card/Card";
import useEvolutionChain from "../../../hooks/useEvolutionChain";

interface PokemonCardBackProps {
    name: string
    isLoading: boolean
    type: string
    moves: string[]
}

interface EvolutionItemProps {
    name: string
    isCurrentPokemon: boolean
}

const EvolutionItem = ({name, isCurrentPokemon}: EvolutionItemProps) => Boolean(name) && (
    <Card.Text className={isCurrentPokemon ? 'underline' : null}>
        <>{name}</>
    </Card.Text>
)

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

const Back = ({name, isLoading, type, moves}: PokemonCardBackProps) => {

    return (
        <>
            <Card.Content>
                <EvolutionChain name={name}/>
            </Card.Content>
            <Card.Bottom loading={isLoading}>
                <>
                    <Card.Chips chips={[type]}/>
                    <Card.Chips chips={moves}/>
                </>
            </Card.Bottom>
        </>
    )
}

export default Back