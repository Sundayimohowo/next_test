import { GET_ALBUM } from "../actionTypes";
import { ActionType } from "../types";

export interface AlbumsType {
    artworkUrl60 :string;
    collectionName :string;
    artistName :string;
    trackCount :number;
    primaryGenreName :string;
}

export interface AlbumState {
    albums :AlbumsType[];
    page :number;
    loading :boolean;
}

const initialState :AlbumState = {
    albums: [],
    page: 1,
    loading: false
};

const albumReducers = (state = initialState, action :ActionType) => {
    const { type, payload, overwrite } = action;
    switch(type) {
        case GET_ALBUM:
            if(overwrite) return {...state, albums: payload.results, page: payload.page};
            return {...state, albums: [...state.albums, ...payload.results], page: payload.page};
        default:
            return state;
    }
}

export default albumReducers