import { GET_ALBUM } from "../actionTypes";
import { ActionType } from "../types";

export interface AlbumState {
    artworkUrl60 :string;
    collectionName :string;
    artistName :string;
    trackCount :number;
    primaryGenreName :string;
}

const initialState :AlbumState[] = [];

const albumReducers = (state = initialState, action :ActionType) => {
    const { type, payload, overwrite } = action;
    switch(type) {
        case GET_ALBUM:
            if(overwrite) return payload;
            return [...state, ...payload];
        default:
            return state;
    }
}

export default albumReducers