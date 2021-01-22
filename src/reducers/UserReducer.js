const INIT_STATE = {
    isLogged: false
}

const userReducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'USER_LOGGED_IN': {
            return {
                ...state,
                ...action.payload,
                isLogged: true                
            }
        }
        case 'USER_LOGGED_OUT': return INIT_STATE;
        default: return state;
    }
}

export default userReducer;