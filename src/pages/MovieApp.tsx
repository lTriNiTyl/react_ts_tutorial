import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './MovieApp.module.css'

export const MovieApp = () => {
  const [loading, setLoading] = useState(true);
  const [moviesdata, setMoviesData] = useState<any[]>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      // API 주소를 변수에 저장.
      const url = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year';
      // fetch 함수로 API 요청을 보내고 응답을 받는다.
      const response = await fetch(url);
      // 응답을 json 형식으로 파싱
      const json = await response.json();
      setMoviesData(json.data.movies);
      setLoading(false);
    };
    // 비동기 함수 호출.
    fetchMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {moviesdata.map((movie) => (
            <div className={styles.movie} key={movie.id}>
              <img src={movie.medium_cover_image} alt={movie.title} className={styles.movie__img}/>
              <h2 className={styles.movie__title}>
                <Link to={`/movieapp/${movie.id}`}>{movie.title}</Link>
              </h2>
              <h3 className={styles.movie__year}>{movie.year}</h3>
              <p>{movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
              <ul className={styles.movie__genres}>
                {movie.genres?.map((g: any) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
