import { useParams } from 'react-router-dom';
import fetchTheMoviedb from 'services/fetchTheMoviedb';
export default function MovieDetails() {
  const { movieId } = useParams();
  const movie = fetchTheMoviedb(`movie/${movieId}`)
    .then(({ results }) => {
      if (!results) {
        return;
      }
    })
    .catch(error => {
      alert(error.message);
    });
  console.log(movie);
  return (
    <main>
      <button type="button">Go back</button>
      <img src="" alt=""></img>
    </main>
  );
}
