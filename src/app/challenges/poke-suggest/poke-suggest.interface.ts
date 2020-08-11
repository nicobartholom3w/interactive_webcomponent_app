export interface SimplePokemonBase {
    name: string,
    url: string
}

export interface SimplePokemonBasePayload {
    count: number,
    next: string | null,
    previous: string | null,
    results: SimplePokemonBase[]
}

