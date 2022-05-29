import Card from "common/components/Card/Card"
import {usePokemon} from "../../hooks/usePokemon";

interface Props {
    pokemonName: string
}

const PokemonCard = ({pokemonName}: Props) => {
    const {pokemon} = usePokemon(pokemonName)

    return Boolean(pokemon) && (
        <Card>
            <>
                <Card.Image image={pokemon.image} alt=""/>
                <Card.Content>
                    <>
                        <Card.Title><>{pokemon.name}</>
                        </Card.Title>
                        <Card.Text><>Some text</>
                        </Card.Text>
                        <Card.Content.onExpanded>
                            <>Show more Content</>
                        </Card.Content.onExpanded>
                    </>
                </Card.Content>
                <Card.Bottom>
                    <Card.Chips chips={[pokemon.type]}/>
                    <Card.Chips chips={pokemon.moves}/>
                </Card.Bottom>
            </>
        </Card>
    )
}

export default PokemonCard