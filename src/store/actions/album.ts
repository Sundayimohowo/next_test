import { ActionType } from "../types";
import axios from 'axios';
import { GET_ALBUM } from "../actionTypes";

export const getAlbum = (query :string, page :number, overwrite :boolean): Promise<ActionType> => {
    return axios.get('https://itunes.apple.com/search?limit=10&offset=' + page*10 + '&media=music&entity=album&term=' + query)
    .then(response => {
        return{
            overwrite,
            type: GET_ALBUM,
            payload: {page, results: response.data.results},
        } 
    })
}