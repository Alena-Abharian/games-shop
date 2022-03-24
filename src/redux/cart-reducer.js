const SET_ITEM_CART = 'SET_ITEM_CART'
const DELETE_ITEM_CART = 'DELETE_ITEM_CART'

const initialState = {
    itemsInCart: [],
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ITEM_CART:
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, action.payload],
            }

        case DELETE_ITEM_CART:
            return {
                ...state,
                itemsInCart: state.itemsInCart.filter(game => game.id !== action.payload)
            }

        default:
            return state
    }
};

export const setItemInCart = (payload) => {
    return {
        type: SET_ITEM_CART, payload
    }
};
export const deleteItemFromCart = (payload) => {
    return {
        type: DELETE_ITEM_CART, payload
    }
};

export default cartReducer;
