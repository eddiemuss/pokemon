import Card from "../../../../../common/components/Card/Card";

interface PokemonCardBackProps {
    name: string
    isLoading: boolean
    type: string
    moves: string[]
}

const Back = ({name, isLoading, type, moves}: PokemonCardBackProps) => (
    <>
        <Card.Content>
            <>
                <Card.Title>
                    <>{name}</>
                </Card.Title>
                <Card.Text><>More information</>
                </Card.Text>
            </>
        </Card.Content>
        <Card.Bottom loading={isLoading}>
            <>
                <Card.Chips chips={[type]}/>
                <Card.Chips chips={moves}/>
            </>
        </Card.Bottom>
    </>
)

export default Back