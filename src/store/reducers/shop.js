import {SET_PRODUCTS, REMOVE_FROM_BASKET, ADD_TO_BASKET, REMOVE_1_PRODUCT_FROM_BASKET} from '../actions/shopActions'

const initState = {
    products: [],
    // basket:  [],
    items: JSON.parse(localStorage.getItem('basket')) || {}
}
export function shop(state = initState, action) {
    const newState = {...state}
    switch (action.type) {
        case SET_PRODUCTS:
            newState.products = action.payload;
            break;
        case ADD_TO_BASKET: 
            const newItems = {
                ...newState.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            };
            newState.items = newItems
            break;
        case REMOVE_FROM_BASKET: 
            let newItemsWithoutOne = {...newState.items}
                newItemsWithoutOne[action.payload] = undefined
                newItemsWithoutOne = JSON.parse(JSON.stringify(newItemsWithoutOne ));

            newState.items = newItemsWithoutOne
            break;
        case REMOVE_1_PRODUCT_FROM_BASKET:
            let minusOneItemCount = {...newState.items}
            minusOneItemCount[action.payload].pop()
            newState.items = minusOneItemCount
            break;
        default:
            return state
    }
    localStorage.clear();
    localStorage.setItem('basket', JSON.stringify(newState.items))
    return newState;
}