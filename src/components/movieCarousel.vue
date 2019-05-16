<template>

<div class="balck-background-box">
    <div class="title">
        <span>{{ title }}</span>
    </div>
    <div v-if="items.length !== 0 " class="result">
        <Carousel :perPage="perPage">
            <Slide v-for="(item, index) in items" :key="index">
                <movie-card :movie="item">
                </movie-card>
            </Slide>
        </Carousel>
    </div>
    <div  v-else class="no-result">
     No Record
    </div>
</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
    'movie-card': () => import('./movieCard')
  },
  props: {
      items: {
          type: Array,
          required: true,
      },
      title: {
          type: String,
          required: true
      },
      perPage: {
          type: Number,
          default: 4,
      }
  }
}
</script>
<style lang="css">
@import './../assets/styles/carousel.css';
</style>