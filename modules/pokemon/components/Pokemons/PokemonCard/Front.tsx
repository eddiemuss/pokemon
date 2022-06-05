import Card from "../../../../../common/components/Card/Card";

interface PokemonCardFrontProps {
    name: string
    image: string | undefined
    isLoading: boolean
}

const Front = ({name, image, isLoading}: PokemonCardFrontProps) => (
    <>
        <Card.Image loading={isLoading} image={image} alt=""/>
        <Card.Content>
            <>
                <Card.Title>
                    <>{name}</>
                </Card.Title>
            </>
        </Card.Content>
    </>
)

export default Front