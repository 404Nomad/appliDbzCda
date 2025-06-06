import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterResponse, Planet, PlanetResponse } from "../../types/character"
import axios from "axios";
import { API_URL } from "../../constants/apiConstants";

interface CharactersState {
    characters: CharacterResponse | null; // tableau de personnages
    loading: boolean; // isloading
    error: string | null; // error
    characterDetail: Character | null; // character detail d'un seul personnage
    SelectedCharacterId: number | null; // id du personnage selectionné
    CharacterByRace: Character[] | null;
    planet: PlanetResponse | null;
    characterDetail1: Character | null;
    characterDetail2: Character | null;
}

const initialState: CharactersState = {
    characters: null, // null car on recupere tout l'objet de la réponse
    loading: false, // isloading
    error: null, // error
    characterDetail: null, // character detail d'un seul personnage
    SelectedCharacterId: null, // id du personnage selectionné
    CharacterByRace: null,
    planet: null,
    characterDetail1: null,
    characterDetail2: null,
}

// on créer un setter pour chaque state initialisée
const characterSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<CharacterResponse>) => {
            state.characters = action.payload; // on recupere le tableau de personnages
            state.error = null; // on reset l'erreur
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload; // on recupere l'état de loading
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload; // on recupere l'erreur
            state.loading = false; // on reset l'état de loading
        },
        setCharacterDetail: (state, action: PayloadAction<Character | null>) => {
            state.characterDetail = action.payload; // on recupere le personnage detail
            state.error = null; // on reset l'erreur
        },
        setSelectedCharacterId: (state, action: PayloadAction<number | null>) => {
            state.SelectedCharacterId = action.payload; // on recupere l'id du personnage selectionné
        },
        clearCharacterDetail: state => {
            state.characterDetail = null; // on reset le personnage detail
        },
        clearSelectedCharacterId: state => {
            state.SelectedCharacterId = null; // on reset l'id du personnage selectionné
        },
        setCharacterByRace: (state, action: PayloadAction<Character[] | null>) => {
            state.CharacterByRace = action.payload; // on recupere le personnage detail
        },
        setPlanet: (state, action: PayloadAction<PlanetResponse | null>) => {
            state.planet = action.payload; // on recupere la planete
        },
        setCharacter1: (state, action: PayloadAction<Character | null>) => {
            state.characterDetail1 = action.payload; // on recupere le personnage detail
        },
        setCharacter2: (state, action: PayloadAction<Character | null>) => {
            state.characterDetail2 = action.payload; // on recupere le personnage detail
        },
    },
});

export const {
    setCharacters,
    setLoading,
    setError,
    setCharacterDetail,
    setSelectedCharacterId,
    clearCharacterDetail,
    clearSelectedCharacterId,
    setCharacterByRace,
    setPlanet,
    setCharacter1,
    setCharacter2,
} = characterSlice.actions; // on exporte les actions

//requetes base de données, double méthode anonyme
export const fetchCharacters = (page: number = 1, limit: number = 10) => async (dispatch: any) => {
    //async donc try catch finally
    try {
        // on passe le state loading a true avant de faire la requete
        dispatch(setLoading(true));
        // on fait la requete
        const response = await axios.get<CharacterResponse>(`${API_URL}/characters?page=${page}&limit=${limit}`); // on fait la requete
        // on dispatch les personnages
        dispatch(setCharacters(response.data)); // on dispatch les personnages
    } catch (error) {
        // si une erreur, on remplit le state error avec le message d'erreur
        const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue lors de la récupération des personnages.";
        dispatch(setError(errorMessage)); // on dispatch l'erreur
        console.error("Erreur lors du FetchCharacters:", error);
    } finally {
        dispatch(setLoading(false)); // on reset l'état de loading
    }
}

export const fetchCharacterDetail = (id: number) => async (dispatch: any) => {

    try {
        dispatch(setLoading(true)); // on passe le state loading a true avant de faire la requete
        const response = await axios.get<Character>(`${API_URL}/characters/${id}`); // on fait la requete
        dispatch(setCharacterDetail(response.data)); // on dispatch le personnage detail
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue lors de la récupération du détail d'un personnage.";
        dispatch(setError(errorMessage)); // on dispatch l'erreur
        console.error("Erreur lors du FetchCharacterDetail:", error);
    } finally {
        dispatch(setLoading(false)); // on reset l'état de loading

    }
}

export const fetchCharacterByRace = (race: string) => async (dispatch: any) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.get<Character[]>(
            `${API_URL}/characters?race=${race}`,
        );
        dispatch(setCharacterByRace(response.data));
    } catch (error) {
        //si une erreur on remplit le state error avec le message d'erreur
        const errorMessage =
            error instanceof Error
                ? error.message
                : 'Une erreur est survenue lors de la récupération des personnages par race';
        dispatch(setError(errorMessage));
        console.log('Erreur lors du fetchCharacterByRace:', error);
    } finally {
        //on repasse le state loading a false
        dispatch(setLoading(false));
    }
};

export const fetchPlanet = 
    (page: number = 1, limit: number = 10) => async (dispatch: any) => {
    //async donc try catch finally
    try {
        // on passe le state loading a true avant de faire la requete
        dispatch(setLoading(true));
        // on fait la requete
        const response = await axios.get<PlanetResponse>(`${API_URL}/planets?page=${page}&limit=${limit}`); // on fait la requete
        // on dispatch les personnages
        dispatch(setPlanet(response.data)); // on dispatch les personnages
    } catch (error) {
        // si une erreur, on remplit le state error avec le message d'erreur
        const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue lors de la récupération des planetes.";
        dispatch(setError(errorMessage)); // on dispatch l'erreur
        console.error("Erreur lors du FetchPlanet:", error);
    } finally {
        dispatch(setLoading(false)); // on reset l'état de loading
    }
}

// selection des character 1 & 2 
export const fetchChoiceCharacterDetail = (id: number, type: number) => async (dispatch: any) => {

    try {
        dispatch(setLoading(true)); // on passe le state loading a true avant de faire la requete
        const response = await axios.get<Character>(`${API_URL}/characters/${id}`); // on fait la requete
        type === 1 ? dispatch(setCharacter1(response.data)) : dispatch(setCharacter2(response.data)); 
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Une erreur est survenue lors de la récupération du détail d'un personnage.";
        dispatch(setError(errorMessage)); // on dispatch l'erreur
        console.error("Erreur lors du FetchCharacterDetail:", error);
    } finally {
        dispatch(setLoading(false)); // on reset l'état de loading

    }
}

// il faut aussi exporter les reducer, pour apeller le slice dans le store
export default characterSlice.reducer;