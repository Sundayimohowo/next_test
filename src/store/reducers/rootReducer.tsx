import { combineReducers } from 'redux';
import musicReducer from './musicReducer';
import artistReducer from './artistReducer';
import allReducer from './allReducer';
import albumReducer from './albumReducer';

export default combineReducers({
    music: musicReducer,
    artist: artistReducer,
    all: allReducer,
    album: albumReducer
});