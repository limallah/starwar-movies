import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']} >
      {props.movies.map((movie) => (
        <Movie
          key={movie.episode_id}
          mid={movie.episode_id}
          title={movie.title}
          releaseDate={movie.release_date}
          openingText={movie.opening_crawl}
          director={movie.director}
          
        />
      ))}
    </ul>
  );
};

export default MovieList;
