import Card from "common/components/Card/Card"
import {BasePokemon} from "../../interfaces/Pokemon";

interface Props {
    pokemon: BasePokemon
}

const PokemonCard = ({pokemon}: Props) => (
    <Card key={pokemon.name}>
        <>
            <Card.Image image={pokemon.image} alt=""/>
            <Card.Content>
                <>
                    <Card.Title><>{pokemon?.name}</>
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

export default PokemonCard