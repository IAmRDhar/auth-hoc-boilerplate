import {
    CHANGE_AUTH
} from '../actions/types';

//for auth reducer the default state is false
//i.e. user is not logged in
export default function (state = false, action){
    switch (action.type){
        case CHANGE_AUTH:
            return action.payload;
    }

    return state;
}