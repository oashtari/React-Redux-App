import { GET_JOBS } from '../actions';

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
            }
        default:
            return state;
    }
};
