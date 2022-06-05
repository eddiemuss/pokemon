import Card from "common/components/Card/Card"
import {usePokemon} from "../../../hooks/usePokemon";
import ReactCardFlip from "react-card-flip";
import {useState} from "react";
import Front from './Front'
import Back from "./Back";

interface Props {
    pokemonName: string
}

const PokemonCard = ({pokemonName}: Props) => {
    const {pokemon, isLoading} = usePokemon(pokemonName)
    const [isFlipped, setIsFlipped] = useState(false)
    const toggleFlipped = () => setIsFlipped((flipped) => !flipped)

    return (
        <ReactCardFlip isFlipped={isFlipped}>
            <Card onClick={toggleFlipped}>
                <Front name={pokemon?.name || pokemonName} image={pokemon?.image} isLoading={isLoading}/>
            </Card>
            <Card onClick={toggleFlipped}>
                {isFlipped ? (
                    <Back
                        name={pokemon?.name || pokemonName}
                        type={pokemon?.type}
                        moves={pokemon?.moves}
                        isLoading={isLoading}/>
                ) : null}
            </Card>
        </ReactCardFlip>
    )
}

export default PokemonCard