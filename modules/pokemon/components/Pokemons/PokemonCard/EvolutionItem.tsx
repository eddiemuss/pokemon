import Card from "../../../../../common/components/Card/Card";

interface EvolutionItemProps {
    name: string
    isCurrentPokemon: boolean
}

const EvolutionItem = ({name, isCurrentPokemon}: EvolutionItemProps) => Boolean(name) && (
    <Card.Text className={isCurrentPokemon ? 'underline' : null}>
        <>{name}</>
    </Card.Text>
)

export default EvolutionItem