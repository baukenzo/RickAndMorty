import axios from "axios";

export const SET_PRODUCTS = 'shop/setProducts'

export const ADD_TO_BASKET = 'basket/add'

export const REMOVE_1_PRODUCT_FROM_BASKET = 'basket/minusOne'

export const REMOVE_FROM_BASKET = 'basket/removeFromBasket'

export const fetchProducts = () => (dispatch) => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
        dispatch({
            type: SET_PRODUCTS,
            payload: res.data,
        })
    })
}


export const addToBasket = (product) => (dispatch) => {
    dispatch({
        type: ADD_TO_BASKET,
        payload: product,
    })
}

export const minusOneItem = (id) => dispatch => {
    dispatch({
        type: REMOVE_1_PRODUCT_FROM_BASKET,
        payload: id,
    })
}

export const removeFromBasket = (id) => (dispatch) => {
    dispatch({
        type: REMOVE_FROM_BASKET,
        payload: id,
    })
}