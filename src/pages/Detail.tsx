import React from 'react'
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const { id } = useParams();

  React.useEffect(() => {
    const fetchMovieDetail = async () => {
      // API 주소를 변수에 저장.
      const url = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`;
      // fetch 함수로 API 요청을 보내고 응답을 받는다.
      const response = await fetch(url);
      // 응답을 json 형식으로 파싱
      const json = await response.json();
      console.log(json);
    };
    fetchMovieDetail();
  });

  return (
    <div>Detail</div>
  )
}
