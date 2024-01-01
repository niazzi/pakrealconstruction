import {
    LABOR_DETAILS_REQUEST,
    LABOR_DETAILS_SUCCESS,
    LABOR_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,


    DELETE_LABOR_REQUEST,
    DELETE_LABOR_SUCCESS,
    DELETE_LABOR_FAIL,
    DELETE_LABOR_RESET,

    ADMIN_LABOR_REQUEST,
    ADMIN_LABOR_SUCCESS,
    ADMIN_LABOR_FAIL,

    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,
    CLEAR_ERRORS
} from '../constants/laborConstants';

export const laborsReducer = (state = { labors: [] }, action) => {
    switch (action.type) {
        
        case ADMIN_LABOR_REQUEST:
            return {
                loading: true,
                labors: []
            }
        
        case ADMIN_LABOR_SUCCESS:
            return {
                loading: false,
                labors: action.payload
            }

        case ADMIN_LABOR_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const laborDetailsReducer = (state = { labor: {} }, action) => {
    switch (action.type) {

        case LABOR_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LABOR_DETAILS_SUCCESS:
            return {
                loading: false,
                labor: action.payload
            }

        case LABOR_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



export const newLaborReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



// Delete Complain Reducer

export const laborReducer = (state = {}, action) => {
    switch (action.type) {

        
        case DELETE_LABOR_REQUEST:
            return {
                ...state,
                loading: true
            }

        

        case DELETE_LABOR_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        

        case DELETE_LABOR_RESET:
            return {
                ...state,
                isDeleted: false
            }

        
        case DELETE_LABOR_FAIL:
            return {
                ...state,
                // loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const laborReviewsReducer = (state = { review: [] }, action) => {
    switch (action.type) {

        case GET_REVIEWS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload
            }

        case GET_REVIEWS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const laborreviewReducer = (state = {}, action) => {
    switch (action.type) {

        case DELETE_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case DELETE_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case DELETE_REVIEW_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}