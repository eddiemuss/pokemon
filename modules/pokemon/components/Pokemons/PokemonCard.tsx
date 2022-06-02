import Card from "common/components/Card/Card"
import {usePokemon} from "../../hooks/usePokemon";

interface Props {
    pokemonName: string
}

const PokemonCard = ({pokemonName}: Props) => {
    const {pokemon, isLoading} = usePokemon(pokemonName)

    return (
        <Card>
            <>
                <Card.Image loading={isLoading} image={pokemon?.image} alt=""/>
                <Card.Content>
                    <>
                        <Card.Title>
                            <>{pokemon?.name || pokemonName}</>
                        </Card.Title>
                        <Card.Text><>Some text</>
                        </Card.Text>
                        <Card.Content.onExpanded>
                            <>Show more Content</>
                        </Card.Content.onExpanded>
                    </>
                </Card.Content>
                <Card.Bottom loading={isLoading}>
                    <>
                        <Card.Chips chips={[pokemon?.type]}/>
                        <Card.Chips chips={pokemon?.moves}/>
                    </>
                </Card.Bottom>
            </>
        </Card>
    )
}

export default PokemonCard