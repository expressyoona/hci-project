const INITIAL_STATE = {}

const restaurantReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOADED_RESTAURANT': {
            const result = {
                ...state,
                ...action.payload
            }
            return result;
        }
        default: return state;
    }
}

export default restaurantReducer;