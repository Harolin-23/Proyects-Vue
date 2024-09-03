<script setup lang="ts">
import Header from './components/header/header.vue';
import { ref, onMounted } from 'vue';
import CardMovie from './components/cardMovie/CardMovie.vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const slides = ref([
  { id: 1, image: 'https://wallpapercave.com/wp/wp9424696.jpg', text: 'Avatar', elenco: 'Sam Worthington, Zoe Saldana' },
  { id: 2, image: 'https://wallpaperaccess.com/full/1109027.jpg', text: 'Aladín', elenco: 'Will Smith, Mena Massoud' },
  { id: 3, image: 'https://images.hdqwalls.com/download/godzilla-x-kong-the-new-empire-chinese-poster-dj-7680x4320.jpg', text: 'Godzilla X Kong', elenco: 'Alexander Skarsgård, Millie Bobby Brown' },
  { id: 4, image: 'https://wallpaperaccess.com/full/1484467.jpg', text: 'Jocker', elenco: 'producida por Todd Phillips and Scott Silver. ' },
  { id: 5, image: 'https://wallpaperaccess.com/full/1752575.jpg', text: 'Bumblebee', elenco: 'Travis Knight, Matthew McConaughey' },
  { id: 6, image: 'https://wallpaperaccess.com/full/1534439.jpg', text: 'Mujer Maravilla', elenco: 'Actor 5, Actor 6' },
  { id: 7, image: 'https://wallpaperaccess.com/full/1453793.jpg', text: 'bella y la Bestia', elenco: 'Actor 7, Actor 8' },
]);


const movie = 
        {
            "Title": "Batman Begins",
            "Year": "1995",
            "imdbID": "tt0113312",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        }
;

const imagesLoaded = ref(false);

onMounted(() => {
  const imagePromises = slides.value.map(slide => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = resolve;
    });
  });

  Promise.all(imagePromises).then(() => {
    imagesLoaded.value = true;
  });
});
</script>

<template>
<div class="container-web">
  <Header />
  <div class="carrousel-contain" v-if="imagesLoaded">
    <Carousel :autoplay="5000" :wrap-around="true" class="custom-carousel">
      <Slide v-for="slide in slides" :key="slide.id">
        <p class="text-image">{{ slide.text }}
          <span class="info-movie">{{ slide.elenco }}</span>
        </p>
        
        <div class="carousel__item">
          <img :src="slide.image" :alt="slide.text" class="carousel__image" loading="lazy">
        </div>
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <div class="movies-cont">
      <div class="text-mov">
        <h2>Peliculas </h2>
        <hr>
      </div>
      <div class="movies-card-container">
        <CardMovie :movie="movie"/>
        <CardMovie :movie="movie"/>
        <CardMovie :movie="movie"/>
        <CardMovie :movie="movie"/>
      </div>
  </div>
</div>
</template>

<style scoped>
.custom-carousel {
  width: 98%;
  height: 400px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 12px;
  overflow: hidden;
 order: 2;
}

.carrousel-contain {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6%;
  padding-left: 2%;
}

.carousel__item {
  position: relative;
  width: 110%;
  height: 100%;
  cursor: grab;
  orphans: 1;
}

.carousel__pagination {
  position: absolute;
  left: 45%;
  bottom: 12px;
  background-color: rgba(121, 121, 121, 0.411);
  backdrop-filter: blur(12px);
}

.carousel__pagination li {
  color: white !important;
  z-index: 20;
  border-radius: 12px;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center -100px;
  margin-left: 20.7px;
  opacity: 0.5;
}


.carousel__item p {
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  color: #000000 !important;
  padding: 10px;
}

@media screen and (max-width: 996px) {
  .custom-carousel {
    height: 200px;
  }
  .carousel__pagination {
    left: 30%;
  }

  .text-image{
  position: absolute !important;
  height: auto;
  font-size: calc(2em + 1.5vw) !important;
  top: 2% !important;
  padding: 10px;
  right: 10% !important;
  margin: 0px;
  }



}

@media screen and (max-width: 1298px) {
  .carrousel-contain {
    padding-top: 10%;
  }
  .carousel__image {
    object-position: center center;
  }
  .carousel__pagination {
    left: 40%;
  }
}

@media screen and (max-width: 827px) {
  .carrousel-contain {
    padding-top: 15%;
  }
}

@media screen and (max-width: 527px) {
  .carrousel-contain {
    padding-top: 25%;
  }
  .custom-carousel {
    height: 200px;
    border: none;
  }
  .carousel__image {
    object-position: 10px center !important;
    margin-left: 0px;
    border-radius: 12px;
  }
  .carousel__pagination {
    left: 25%;
  }
}

.text-image{
  position: absolute !important;
  top: 5% !important;
  font-size: calc(4em + 1vw);
  color: #ffffff !important;
  /* background-color: rgb(0, 0, 0) !important; */
  width: 40%;
  height: auto;
  right: 0%;
  z-index: 10000000 !important;
  filter: drop-shadow(0px 10px 10px rgba(255, 255, 255, 0.274));
  display: flex;
  flex-direction: column;
  align-items: start;
  span{
    font-size: calc(0.2em + 0.6vw);
    color: #ffffff !important;
  }
}


.text-mov{
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: calc(0.7em + 1vw);
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  
}
.text-mov hr{
    width: 80%;
    border: 2px solid rgba(127, 255, 212, 0.678); 
    filter: drop-shadow(0 2px 2px rgb(127, 255, 212)); 
  }
  


  .movies-card-container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    padding-top: 20px;
    padding-left: 20px;
  }

</style>
