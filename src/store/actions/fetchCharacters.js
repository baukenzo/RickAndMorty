export const SET_CHARACTERS = 'SET_CHARACTERS'
export const SET_CHARACTERS_PAGE_INFO = 'SET_CHARACTERS_PAGE_INFO'
export const SET_STATUS = 'SET_STATUS'
export const SET_FILTER = 'SET_FILTER'

export const fetchCharacters = ({page = 1, statusChar = '', filterChar = ''} = {}) => dispatch => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${filterChar}&status=${statusChar}`)
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: SET_CHARACTERS,
                payload: data.results
            })
            dispatch({
                type: SET_CHARACTERS_PAGE_INFO,
                payload: {
                    page: page,
                    total_pages: data.info.pages
                }
            })
        })
}