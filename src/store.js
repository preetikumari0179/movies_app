import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const apiBaseURL = 'https://api.themoviedb.org/3/';
const http = axios.create({
  baseURL: apiBaseURL,
  timeout: 10000,
});
const apiKey = {
  api_key: 'eba6955a2c5a4dace95fa4773c9bf2bc',
};
export default new Vuex.Store({
  state: {
    popularmovies: [],
    moviesintheatre: [],
    searchmovies: [],
    moviedetails: {},
  },
  mutations: {
    POPULAR_MOVIES(state, response) {
      // eslint-disable-next-line no-param-reassign
      state.popularmovies = response.data.results;
    },
    MOVIES_IN_THEATRE(state, response) {
      // eslint-disable-next-line no-param-reassign
      state.moviesintheatre = response.data.results;
    },
    SEARCHED_MOVIES(state, response) {
      // eslint-disable-next-line no-param-reassign
      state.searchmovies = response.data.results;
    },
    MOVIE_DETAILS(state, response) {
      // eslint-disable-next-line no-param-reassign
      state.moviedetails = response.data;
    },
  },
  actions: {
    getPopularMovies(context) {
      const params = {
        ...apiKey,
        sort_by: 'popularity.desc',
      };
      http.get('discover/movie', { params }).then((res) => {
        context.commit('POPULAR_MOVIES', res);
      });
    },
    getMoviesInTheatre(context) {
      const params = {
        ...apiKey,
        sort_by: 'popularity.desc',
        'primary_release_date.gte': '2016-06-20',
        'primary_release_date.lte': '2017-07-03',
      };
      http.get('discover/movie', { params }).then((res) => {
        context.commit('MOVIES_IN_THEATRE', res);
      });
    },
    searchMovies(context, search) {
      const params = {
        ...apiKey,
        sort_by: 'popularity.desc',
        'primary_release_date.gte': '2016-06-20',
        'primary_release_date.lte': '2017-07-03',
        query: search,
      };
      http.get('search/movie', { params }).then((res) => {
        context.commit('SEARCHED_MOVIES', res);
      });
    },
    getMovieDetails(context, id) {
      const params = {
        ...apiKey,
      };
      http.get(`movie/${id}`, { params }).then((res) => {
        context.commit('MOVIE_DETAILS', res);
      });
    },
  },
});
