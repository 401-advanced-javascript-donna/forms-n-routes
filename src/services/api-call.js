const URL = 'https://last-airbender-api.herokuapp.com';

export function getCharacter() {
  return fetch(`${URL}/api/v1/characters/random`)
    .then(res => res.json());
}

export function getSearchedCharacters(search, page = 1) {
  return fetch(`${URL}/api/v1/characters?name=${search}&page=${page}`)
    .then(res => res.json());
}

export function getSingleCharacter(id) {
  return fetch(`${URL}/api/v1/characters/${id}`)
    .then(res => res.json());
}
