import React from 'react';
import { connect } from 'react-redux';

import { getJobs } from '../actions';

import { Button } from 'reactstrap';

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
                    <Button color="primary" onClick={handleGetJobs}>Get dem jobs</Button>
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