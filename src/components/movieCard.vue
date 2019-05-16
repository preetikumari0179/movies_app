<template>
    <div>
        <img :alt="movie.title" :src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : placeholderImage"
     class="Image-24">
     <div class="movie-details">
     <span class="Oceans-Eleven">
        {{movie.title}}
     </span>
        <br/>
     <span class="ails" @click="routeTo()">
        View Details >>
     </span>
     </div>
    </div>
</template>
<script>
import image from '../assets/logo.png'
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            placeholderImage: image
        }
    },
    methods: {
        routeTo() {
            this.$router.push(`/movie/${this.movie.id}`)
        }
    },
}
</script>
<style lang="css" scoped>
.Image-24 {
  width: 252.2px;
  height: 371px;
  object-fit: contain;
}
.Oceans-Eleven {
  width: 158px;
  height: 25px;
  font-family: Helvetica;
  font-size: 20.9px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d7ede5;
}
.ails {
  width: 42px;
  height: 17px;
  object-fit: contain;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #5ec19e;
  cursor: pointer;
}
.movie-details {
    display: block
}
</style>