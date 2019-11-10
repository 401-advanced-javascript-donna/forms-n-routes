import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSingleCharacter } from '../services/api-call';
import styles from './Detail.css';

class Detail extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    character: []
  }


  componentDidMount() {
    getSingleCharacter(this.props.match.params.name)
      .then(character => {
        this.setState({ character });
      });
  }


  render() {

    return (
      <div className={styles.Detail}>
        <h1>{this.state.character.name}</h1>
        <img src={this.state.character.photoUrl}></img>
        <p>Gender: {this.state.character.gender}</p>
        <p>Hair: {this.state.character.hair}</p>
        <p>Affiliation: {this.state.character.affiliation}</p>
      </div>
    );
  }

}


export default Detail;
