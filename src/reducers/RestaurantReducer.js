const INITIAL_STATE = {}

const restaurantReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOADED_RESTAURANT': {
            const result = {
                ...state,
                restaurant: action.payload
            }
            return result;
        }
        case 'LOADED_TOP_RESTAURANT': {
            return {
                ...state,
                topRestaurant: action.payload
            }
        }
        default: return state;
    }
}

export default restaurantReducer;