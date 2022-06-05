import Card from "../../../../../common/components/Card/Card";
import EvolutionChain from "./EvolutionChain";

interface PokemonCardBackProps {
    name: string
    isLoading: boolean
    type: string
    moves: string[]
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