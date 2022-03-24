const SET_GAME = 'SET_GAME'

const initialState = {
    currentGame: null,
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME:
            return {
                ...state,
                currentGame: action.payload
            }
        default:
            return state
    }
};

export const setCurrentGame = (payload) => {
    return {
        type: SET_GAME, payload
    }
};

export default gamesReducer;
