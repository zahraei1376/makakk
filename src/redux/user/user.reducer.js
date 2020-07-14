import { UserActionTypes } from './user.types';

const INITIAL = {
    currentUser:null,
    isTeacher:null,
    isAdmin:null,
    errorMessage:undefined
}

const UserReducer = (state=INITIAL , action) => {
    switch(action.type){
        case UserActionTypes.FETCH_USER_SECCUSS:
            return {
                ...state,
                currentUser:action.payload,
                isTeacher:action.isTeacher,
                isAdmin:action.isAdmin
            }
        case UserActionTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                // isFetching:false,
                errorMessage:action.payload
            }
        default:
            return state;
        // case UserActionTypes.SET_CURRENT_USER:
        //     return{
        //         ...state,
        //         currentUser:action.payload
        //     }
        // default:
        //     return state;
    }
};

export default UserReducer;