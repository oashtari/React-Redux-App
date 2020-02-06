import { GET_JOBS, LOAD_JOBS, SHOW_ERROR } from '../actions';

const initialState = {
    jobs: [],
    isFetchingJobs: false,
    error: ''
}

export const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                isFetchingJobs: true,
                jobs: []
            };
        case LOAD_JOBS:
            return {
                ...state,
                isFetchingJobs: false,
                jobs: action.payload
            };
        case SHOW_ERROR:
            return {
                ...state,
                isFetchingJobs: false,
                error: action.payload
            }
        default:
            return state;
    }
};
