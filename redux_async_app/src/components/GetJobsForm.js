import React from 'react';
import { connect } from 'react-redux';

import { getJobs } from '../actions';

const GetJobsForm = props => {

    const handleGetJobs = e => {
        e.preventDefault();
        props.getJobs();
    }

    return (
        <>
            {props.isFetchingJobs ? (
                <h2>we're getting dem jobssssss</h2>
            ) : (
                    <button onClick={handleGetJobs}>Get dem jobs</button>
                )}


        </>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingJobs: state.isFetchingJobs
    }
}

export default connect(
    mapStateToProps,
    { getJobs }
)(GetJobsForm);