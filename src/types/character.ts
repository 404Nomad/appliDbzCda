export interface Character { 
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
    originPlanet?: Planet;
    transformations?: Transformation[];
}

export interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: string | null;
}

export interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: string | null;
}

export interface CharacterResponse {
    items: Character[];
    meta: {
        totalItems: 20,
        itemCount: 10,
        itemsPerPage: 10,
        totalPages: 2,
        currentPage: 1
    };
    links: {
        first: string;
        previous: string;
        next: string;
        last: string
    };
}

export interface PlanetResponse {
    items: Planet[];
    meta: {
        totalItems: 20,
        itemCount: 10,
        itemsPerPage: 10,
        totalPages: 2,
        currentPage: 1
    };
    links: {
        first: string;
        previous: string;
        next: string;
        last: string
    };
}