import React, { Component } from 'react';
import Character from './Character';
import apiCall from '../services/api-call';

class Home extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    return apiCall()
      .then(data => this.setState({ data: data[0] }));
  }

  render() {
    return (
      <Character item={this.state.data.photoUrl} />
    );
  }
}

export default Home;
