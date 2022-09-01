import { ActionType } from "./types";
import axios from 'axios';
import { GET_ALBUM, GET_ALL, GET_ARTIST, GET_MUSIC } from "./actionTypes";

export const getMusic = (query :string, page :number, overwrite :boolean): Promise<ActionType> => {
    return axios.get('https://itunes.apple.com/search?limit=10&offset=' + page*10 + '&media=music&entity=song&term=' + query)
    .then(response => {
        return{
            overwrite,
            type: GET_MUSIC,
            payload: response.data.results,
        } 
    })
}

export const getAlbum = (query :string, page :number, overwrite :boolean): Promise<ActionType> => {
    return axios.get('https://itunes.apple.com/search?limit=10&offset=' + page*10 + '&media=music&entity=album&term=' + query)
    .then(response => {
        return{
            overwrite,
            type: GET_ALBUM,
            payload: response.data.results,
        } 
    })
}

export const getArtist = (query :string, page :number, overwrite :boolean): Promise<ActionType> => {
    return axios.get('https://itunes.apple.com/search?limit=10&offset=' + page*10 + '&media=music&entity=musicArtist&term=' + query)
    .then(response => {
        return{
            overwrite,
            type: GET_ARTIST,
            payload: response.data.results,
        } 
    })
}

export const getAll = (query :string, page :number, overwrite :boolean ):Promise<ActionType> => {
    return axios.get('https://itunes.apple.com/search?limit=10&offset=' + page*10 + '&media=music&entity=song,album,musicArtist&term=' + query)
    .then(response => {
        return{
            overwrite,
            type: GET_ALL,
            payload: response.data.results,
        } 
    })
}