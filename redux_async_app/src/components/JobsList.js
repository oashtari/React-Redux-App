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
                    props.jobs.map(job => (
                        <>
                            <h2>PT/FT: {job.type}</h2>
                            <h3>Company: {job.company}</h3>
                            <h3>Title: {job.title}</h3>
                            <h3>City & State: {job.location}</h3>
                            <h4>More info here: {job.url}</h4>
                        </>
                    ))
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