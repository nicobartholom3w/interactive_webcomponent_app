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

export interface SimplePokemonBaseDetails {
    id: number;
    name: string;
    baseExperience: number;
    height: number;
    isDefault: boolean;
    order: number;
    weight: number;
    abilities: Object[];
    forms: Object[];
    gameIndices: Object[];
    heldItems: Object[];
    locationareaEncounters: string;
    moves: Object[];
    sprites: {
        front_default: string;
        back_default: string;
    }
    species: Object;
    stats: Object[];
    types: Object[];
}