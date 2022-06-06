import Card from "../../../../../common/components/Card/Card";
import EvolutionChain from "./EvolutionChain";

interface PokemonCardBackProps {
    name: string
    isLoading: boolean
    type: string
    moves: string[]
    setNewPokemon: (name: string) => void
}

const Back = ({name, isLoading, type, moves, setNewPokemon}: PokemonCardBackProps) => {

    return (
        <>
            <Card.Content>
                <EvolutionChain name={name} onSelect={setNewPokemon}/>
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