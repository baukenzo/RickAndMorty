import {SET_CHARACTERS, SET_CHARACTERS_PAGE_INFO, SET_STATUS, SET_FILTER} from "../actions/fetchCharacters";

const initState = {
    characters: [],
    pageInfo: {
        page: 1,
        total_pages: 0
    },
    status: '',
    filter: '',
}
export function characters(state = initState, action) {
    const newState = {...state}

    switch (action.type) {
        case SET_CHARACTERS:
            newState.characters = action.payload; 
            break;
        case SET_CHARACTERS_PAGE_INFO:
            newState.pageInfo = action.payload
            break;
        case SET_STATUS:
            newState.status = action.payload;
            break;
        case SET_FILTER:
            newState.filter = action.payload;
            break;
        default:
            return state;
    }

    return newState
}