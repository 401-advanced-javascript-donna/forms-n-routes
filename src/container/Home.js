import React, { Component } from 'react';
import { getCharacter } from '../services/api-call';
import Character from '../components/Character';
import Form from '../components/Form';
import PropTypes from 'prop-types';

class Home extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    photo: '',
    name: '',
    search: '',
  };

  componentDidMount() {
    getCharacter()
      .then(character => {
        this.setState({ photo: character[0].photoUrl, name: character[0].name });
      });
  }

  handleClick = event => {
    event.preventDefault();
    getCharacter()
      .then(character => {
        this.setState({ photo: character[0].photoUrl, name: character[0].name });
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const searchUrl = `/list/${this.state.search}`;
    this.props.history.push(searchUrl);
    


  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  render() {

    return (
      <div>
        <Character photo={this.state.photo} name={this.state.name} handleClick={this.handleClick} />
        <Form form={this.state.search} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default Home;
