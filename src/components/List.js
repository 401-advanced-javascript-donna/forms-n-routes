import React, { Component } from 'react';
import ListItem from './ListItem';
import { getSearchedCharacters } from '../services/api-call';
import PropTypes from 'prop-types';

class List extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        search: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    matches: [],
    page: 1
  }


  componentDidMount() {
    getSearchedCharacters(this.props.match.params.search || '', 1)
      .then(matches => {
        this.setState({ matches });
      });
  }

  componentDidUpdate(prevProp, prevState) {
    if(prevState.page !== this.state.page) {
      getSearchedCharacters(this.props.match.params.search || '', this.state.page)
        .then(matches => {
          this.setState({ matches });
        });
    }
  }

  decrementPage = () => {
    this.setState(state => ({
      page: state.page - 1
    }));
  }

  incrementPage = () => {
    this.setState(state => ({
      page: state.page + 1
    }));
  }

  render() {
    const elements = this.state.matches.map(item => (

      <ListItem
        key={item._id}
        name={item.name}
        _id={item._id}
        photo={item.photoUrl} />
    ));
    return (
      <div>
        <button onClick={this.decrementPage}>Prev</button>
        <button onClick={this.incrementPage}>Next</button>
        <ul>
          {elements}
        </ul>
      </div>
    );
  }

}

export default List;
