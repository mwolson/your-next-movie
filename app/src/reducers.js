import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import client from './apolloClient';

/* GENERATOR: Import all of your reducers */
import searchMovies from './containers/SearchMoviesContainer/reducer';
import landing from './containers/LandingContainer/reducer';
import app from './containers/AppContainer/reducer';

const rootReducer = combineReducers({
  app,
  /* GENERATOR: Compile all of your reducers */
  searchMovies,
  landing,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
