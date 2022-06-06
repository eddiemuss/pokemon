import {Button} from "@mui/material";

interface EvolutionItemProps {
    name: string
    isCurrentPokemon: boolean
    onClick: () => void
}

const EvolutionItem = ({name, isCurrentPokemon, onClick}: EvolutionItemProps) => Boolean(name) && (
    <Button className={isCurrentPokemon ? 'underline' : null} onClick={(e) => {
        e.stopPropagation();
        onClick()
    }}>
        {name}
    </Button>
)

export default EvolutionItem