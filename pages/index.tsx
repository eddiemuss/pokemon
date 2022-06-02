import Pokemons from 'modules/pokemon/components/Pokemons'
import * as SSR from "../modules/pokemon/serverSideRendering/pokemon";

export const getServerSideProps = SSR.getServerSideProps

const IndexPage = () => <Pokemons/>

export default IndexPage
