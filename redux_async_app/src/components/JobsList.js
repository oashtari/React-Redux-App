import React from 'react';
import { connect } from 'react-redux';

import { getJobs } from '../actions';

import GetJobsForm from './GetJobsForm';

const jobsList = props => {


    return (
        <>
            {props.error ? (
                <div className='error'>{props.error}</div>
            ) : (
                    props.jobs.map(job => <div>{job.id}</div>)
                )}


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