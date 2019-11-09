const getCharacter = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(res => res.json());
}

const getSearchedCharacters = (search, page = 1) => {
  if(search === '') {
    return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
      .then(res => res.json());
  }
  else return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${search}`)
    .then(res => res.json());
}

const getSingleCharacter = (id) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json());
}

export default {
  getCharacter,
  getSearchedCharacters,
  getSingleCharacter,
};
