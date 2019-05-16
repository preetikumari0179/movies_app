<template>
    <div class="movie-details">
        <div class="movie-image">
        <span>
        {{movie.title}}
        </span>
        <br/>
        <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage" />
        </div>
        <div class="movie-full-details">
        <span> Genres: {{isData() ? movie.genres.map(obj => obj.name).toString() : ''}}</span>
        <span>
        Release Date: {{movie.release_date}}
        </span>
        <span>
        Status: {{movie.status}}
        </span>
    <span>
    Overview: {{movie.overview}}
    </span>
    <button class="Stroke-15 left" @click="openURL(false, movie.homepage)">
    Visit Official Website
    </button>
    <button class="Stroke-15 right" @click="openURL(true, movie.imdb_id)">
    More Info from IMDB
    </button>
        </div>
    </div>
</template>
<script>
import image from '../assets/logo.png'

export default {
    computed: {
        movie() {         
            return this.$store.state.moviedetails
        }
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('getMovieDetails', id);
    },
     data() {
        return {
            placeholderImage: image
        }
    },
    methods: {
        isData() {
            return Object.keys(this.movie).length
        },
        openURL(imdb=false, path) {
            let url = path
            if (imdb) {
                url = `https://www.imdb.com/title/${path}`
            }
            window.open(url, '_blank')
         }
    },
}
</script>
<style lang="css">
    .movie-details {
        display: inline-block;
        padding: 25px !important;
        align-items: center;
    }
    .movie-image {
        float: left;
    }
    .movie-image span {
        width: 150px;
  height: 25px;
  font-family: Helvetica;
  font-size: 21px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #69c297;
      padding: 15px
    }
    .movie-full-details  span{
        display: block;
        padding: 13px;
        font-size: 18px;
    }
    .movie-full-details {
        color: white;
        padding: 30px;
    }
    .Stroke-15 {
  width: 215px;
  height: 50.7px;
  border: solid 1px #69c297;
  border-radius: 5px;
  padding: 4px;
  color: white;
    background-color: #32313b;
}
.left {
    float: left
}
.right {
    float: right
}
</style>