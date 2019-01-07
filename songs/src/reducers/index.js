import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Show must go on', duration: '4:35' },
        { title: 'I want it all', duration: '4:02' },
        { title: 'Who wants to live forever', duration: '6:10' },
        { title: 'Bohemian Rhapsody', duration: '6:35' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})