import React from 'react';
import { connect } from 'react-redux';

import { getJobs } from '../actions';

import GetJobsForm from './GetJobsForm';

import { Card, CardTitle, CardText, CardBody, CardLink } from 'reactstrap';

const jobsList = props => {


    return (
        <>
            {props.error ? (
                <div className='error'>{props.error}</div>
            ) : (
                    props.jobs.map(job => (
                        <>
                            <Card>
                                <CardTitle>Title: {job.title}</CardTitle>
                                <CardBody>
                                    <CardText>Company: {job.company}</CardText>
                                    <CardText>PT/FT: {job.type}</CardText>
                                    <CardText>City & State: {job.location}</CardText>
                                    <CardLink href={job.url}>Click here for more information</CardLink>
                                </CardBody>
                            </Card>
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