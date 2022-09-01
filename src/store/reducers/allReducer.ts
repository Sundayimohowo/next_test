import { GET_ALL } from "../actionTypes";
import { ActionType } from "../types";

export interface AllState {
    artworkUrl60? :string;
    trackName? :string;
    artistName :string;
    collectionName? :string;
    primaryGenreName? :string;
}

const initialState :AllState[] = [];

const allReducers = (state = initialState, action :ActionType) => {
    const { type, payload, overwrite } = action;

    switch(type) {
        case GET_ALL:
            if(overwrite) return payload;
            return [...state, ...payload];
        default:
            return state;
    }
}

export default allReducers