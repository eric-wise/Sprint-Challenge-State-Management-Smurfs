import {
    FETCH_SMURFS,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL
} from '../actions';

const initialState = {
    isFetching: false,
    error: false,
    smurfs: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS: 
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: false,
                smurfs: action.payload
            }    
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case ADD_SMURF:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: false
            }
        case ADD_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            }
    }
};

