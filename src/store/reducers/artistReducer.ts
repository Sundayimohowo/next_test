import { GET_ARTIST } from "../actionTypes";
import { ActionType } from "../types";

export interface ArtistState {
    artistName :string;
    primaryGenreName :string;
}

const initialState :ArtistState[] = [];

const artistReducers = (state = initialState, action :ActionType) => {
    const { type, payload, overwrite } = action;

    switch(type) {
        case GET_ARTIST:
            if(overwrite) return payload;
            return [...state, ...payload];
        default:
            return state;
    }
}

export default artistReducers