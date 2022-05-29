import Card from "common/components/Card/Card"
import {usePikachu} from "../../hooks/usePikachu";

const Pokemon = () => {
    const {pikachu} = usePikachu()

    console.log({pikachu})

    return (
        <Card>
            <>
                <Card.Image image={pikachu.image} alt=""/>
                <Card.Content>
                    <>
                        <Card.Title><>{pikachu?.name}</>
                        </Card.Title>
                        <Card.Text><>Some text</>
                        </Card.Text>
                        <Card.Content.onExpanded>
                            <>Show more Content</>
                        </Card.Content.onExpanded>
                    </>
                </Card.Content>
                <Card.Bottom>
                    <Card.Chips chips={[pikachu.type]}/>
                    <Card.Chips chips={pikachu.moves}/>
                </Card.Bottom>
            </>
        </Card>
    )
}

export default Pokemon