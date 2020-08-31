import * as actionTypes from "./actionTypes";

const initialState = {
    theme: "light"
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.THEME_UPDATE: {
            return {
             ...state,
             theme: payload.theme
            }
        }

        default: {
            return state;
        }
    }
};

export default reducer;
