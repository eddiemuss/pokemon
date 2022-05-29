import Card from "common/components/Card/Card"
import {usePikachu} from "../../hooks/usePikachu";


const Pokemon = () => {
    const {pikachu} = usePikachu()

    console.log({pikachu})

    return (
        <Card>
            <>
                <Card.Image image="https://picsum.photos/200/300" alt="stock image"/>
                <Card.Content>
                    <>
                        <Card.Title><>Some title</>
                        </Card.Title>
                        <Card.Text><>Some text</>
                        </Card.Text>
                        <Card.Content.onExpanded>
                            <>Show more Content</>
                        </Card.Content.onExpanded>
                    </>
                </Card.Content>
                <Card.Bottom>
                    <Card.Chips chips={['normal']}/>
                    <Card.Chips chips={['game1', 'game2']}/>
                </Card.Bottom>
            </>
        </Card>
    )
}

export default Pokemon