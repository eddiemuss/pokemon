export interface HP {
    value: number
    name: string
}

export interface BasePokemon {
    name: string
    hp: HP
    type: string
    moves: string[]
    image: string
}
