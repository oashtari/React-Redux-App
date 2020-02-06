import axios from 'axios';

export const GET_JOBS = 'GET_JOBS';

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS })

    setTimeout(() => {
        axios
            .get(`https://jobs.github.com/positions.json?search=node`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }, 100)
}