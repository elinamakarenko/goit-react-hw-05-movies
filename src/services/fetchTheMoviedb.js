const KEY = '92ce6d7899f831323ae614f8261684f2';
const URL = 'https://api.themoviedb.org/3/';

function fetchTheMoviedb(value) {
  return fetch(`${URL}${value}?&api_key=${KEY}`).then(response => {
    return response.json();
  });
}

export default fetchTheMoviedb;
