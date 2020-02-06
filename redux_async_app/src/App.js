import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { jobsReducer as reducer } from './reducers';
import JobsList from './components/JobsList';
import GetJobsForm from './components/GetJobsForm';

const store = createStore(reducer, applyMiddleware(thunk, logger));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GetJobsForm />
        <JobsList />
      </Provider>
    </div>
  );
}

export default App;

