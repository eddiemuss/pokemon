import PokemonCard from "./PokemonCard/PokemonCard";

interface Props {
    names: string[]
}

const PokemonList = ({names}: Props) => (
    <div className="flex flex-row flex-wrap justify-evenly items-start">
        {
            names.map((name) => <PokemonCard key={name} pokemonName={name}/>)
        }
    </div>
)

export default PokemonList