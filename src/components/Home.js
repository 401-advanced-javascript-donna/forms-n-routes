import React, { Component } from 'react';
import apiCall from '../services/api-call';
import Character from './Character';

export default class Home extends Component {

  state = {
    character: {}
  }

  componentDidMount() {
    apiCall()
      .then((item) => this.setState({ character: item[0] }));
  }

  render() {

    return (
      <>
        <Character item={this.state.character} />
      </>
    );
  }
}

