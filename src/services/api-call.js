const apiCall = () => {
  let url = 'https://last-airbender-api.herokuapp.com/api/v1/characters/random';
  return fetch(url)
    .then(res => res.json())
    .then(result => result);
};

export default apiCall;
