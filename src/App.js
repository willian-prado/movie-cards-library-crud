import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <h1>Movie Card Library CRUD</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route exact path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id/edit" component={ EditMovie } />
            <Route exact path="/movies/:id" component={ MovieDetails } />
            <Route exact path="/" component={ MovieList } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
