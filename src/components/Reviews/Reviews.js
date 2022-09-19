import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchTheMoviedb from 'services/fetchTheMoviedb';
import s from './Reviews.module.css';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchTheMoviedb(`movie/${movieId}/reviews`)
      .then(response => {
        if (!response) {
          return;
        }
        setReviews(response.results);
      })
      .catch(error => {
        alert(error.message);
      });
  }, [movieId]);
  if (!reviews) {
    return null;
  }
  return reviews.length > 0 ? (
    <ul className={s.reviews}>
      {reviews.map(({ id, author, content }) => (
        <li key={id} className={s.list}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don`t have any reviews for this movie</p>
  );
}
