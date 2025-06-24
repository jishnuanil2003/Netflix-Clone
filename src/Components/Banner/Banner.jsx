import React, { useState, useEffect } from 'react';
import { API_KEY, imageUrl } from '../Constants/Constants';
import YouTube from 'react-youtube';
import axios from '../Axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState();
  const [url, setUrl] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() * 10)]);
      });
  }, []);

  const playTrailer = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setUrl(response.data.results[0]);
      });
  };

  return (
    <>
      {url ? (
        <YouTube
          videoId={url.key}
          opts={{
            height: '640',
            width: '100%',
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      ) : (
        <div
          className='banner'
          style={{
            backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ' '})`,
          }}
        >
          <div className="content">
            <h1 className='Movie_name'>{movie?.title}</h1>
            <div className="buttons">
              <button onClick={() => playTrailer(movie.id)} className='btn1'>
                <i style={{ fontSize: '18px' }} className="ri-play-fill"></i> Play
              </button>
              <button className='btn2'>My List</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;