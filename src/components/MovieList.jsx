
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MovieCard from './MovieCard';


const styles = {
  movieColumn: {
    marginBottom: 20
  }
}
const MovieList = ({movies}) => {
  const movieColumns = movies.Search ? movies.Search.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
      <MovieCard movie={movie} />
    </Col>
  )) :  movies && movies.length>0 ? movies.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
    <MovieCard movie={movie} />
    </Col> 
  )): null;
  
  return (
    <Row>
      {movieColumns}
    </Row>
  );
}

export default MovieList;