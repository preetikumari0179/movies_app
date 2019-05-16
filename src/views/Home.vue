<template>
  <div class="home">
    <div class="balck-background-box">
      <h3 class="search-header">
      Search Your Movie Interest
      <small>Search your movie using search box</small>
      </h3>
      <div class="form-container">
      <input placeholder="search" v-model="searchParam" class="form-control" />
      <img src="../assets/fill-58.png" class="search-icon">
      </div>
      <button @click="search()" class="btn-find">Find</button>
      </div>
      <movie-carousel  title="Search Results" :items="searchedMovies">
      </movie-carousel>
      <movie-carousel title="Popular Movies" :items="popularMovies">
      </movie-carousel>
      <movie-carousel title="Movies In Theatre" :items="moviesInTheatre">
      </movie-carousel>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      searchParam: '',
      movies: [],
    }
  },
  components: {
    'movieCarousel': () => import('../components/movieCarousel.vue')
  },
  methods: {
    search() {
      console.log(this.searchParam, 'search param')
      if (this.searchParam.length) {
        this.$store.dispatch('searchMovies', this.searchParam);
      }
    }
  },
  created() {
    console.log(this.$store);
    this.$store.dispatch('getPopularMovies');
    this.$store.dispatch('getMoviesInTheatre')
  },
  computed: {
    popularMovies() {
      return this.$store.state.popularmovies;
    },
    moviesInTheatre() {
      return this.$store.state.moviesintheatre
    },
    searchedMovies() {
      return this.$store.state.searchmovies
    }
  },
}
</script>
<style lang="css" scoped>
@import './../assets/styles/home.css';
</style>