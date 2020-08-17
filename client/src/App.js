import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  const addToSavedList = movie => {
    setSaved([...saved, movie])
  };

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();  
  }, []);


  return (
    <div>
        <SavedList list={saved}/>
        <Switch>

        <Route exact path='/'>
          <MovieList movies={movieList}/>
        </Route>

        <Route path='/movie/:id'>
          <Movie addToSavedList={addToSavedList}/>
        </Route>

        </Switch>
    </div>
  );
};

export default App;
