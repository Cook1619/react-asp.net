import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import TodoApp  from './components/TodoApp';
import { FetchData } from './components/FetchData';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={TodoApp} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
