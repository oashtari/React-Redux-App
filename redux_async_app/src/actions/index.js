import axios from 'axios';

export const GET_JOBS = 'GET_JOBS';
export const LOAD_JOBS = 'LOAD_JOBS';
export const SHOW_ERROR = 'SHOW_ERROR';

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS })

    setTimeout(() => {
        axios
            .get(`https://jobs.github.com/positions.json?search=node`)
            .then(res => {
                console.log(res.data);
                dispatch({ type: LOAD_JOBS, payload: res.data });
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: SHOW_ERROR, payload: "damn API is not working" });
            })
    }, 100)
}