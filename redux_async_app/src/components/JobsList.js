import React from 'react';
import { connect } from 'react-redux';

import { getJobs } from '../actions';

import GetJobsForm from './GetJobsForm';

const jobsList = props => {


    return (
        <>
            <h2>JOBS STUFFS</h2>


        </>
    )
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getJobs }
)(jobsList);