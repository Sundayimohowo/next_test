import { GET_MUSIC } from "../actionTypes";
import { ActionType } from "../types";

export interface MusicState {
    artworkUrl60 :string;
    trackName :string;
    artistName :string;
    collectionName :string;
    trackTimeMillis :number;
}

const initialState :MusicState[] = [];

const musicReducers = (state = initialState, action :ActionType) => {
    const { type, payload, overwrite } = action;

    switch(type) {
        case GET_MUSIC:
            if(overwrite) return payload;
            return [...state, ...payload];
        default:
            return state;
    }
}

export default musicReducers;