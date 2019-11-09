import React, { Component } from 'react';
import apiCall from '../services/api-call';
import Character from './Character';
import Form from './Form';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    character: {},
    name: ''
  }

  fetch() {
    return apiCall()
      .then(item => this.setState({ character: item[0] }));
  }

  componentDidMount() {
    this.fetch();
  }

  handleClick = () => {
    this.fetch();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/list/${this.state.name}`);
  }

  handleChange = ({ target }) => {
    this.setState({ name: target.value });
  }

  render() {

    const { character, name } = this.state;
    return (
      <>
        <Character item={character} />
        <button onClick={this.handleClick}>Get Random Character</button>
        <Form 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          name={name}
        />
      </>
    );
  }
}

