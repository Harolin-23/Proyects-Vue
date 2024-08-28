<script setup lang="ts">
import Header from './components/header/header.vue';
import { ref, onMounted } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const slides = ref([
  { id: 1, image: 'https://wallpapercave.com/wp/wp9424696.jpg', text: 'Texto 1' },
  { id: 2, image: 'https://wallpaperaccess.com/full/1109027.jpg', text: 'Texto 2' },
  { id: 3, image: 'https://images.hdqwalls.com/download/godzilla-x-kong-the-new-empire-chinese-poster-dj-7680x4320.jpg', text: 'Texto 3' },
  { id: 4, image: 'https://wallpaperaccess.com/full/1484467.jpg', text: 'Texto 4' },
  { id: 5, image: 'https://wallpaperaccess.com/full/1752575.jpg', text: 'Texto 5' },
  { id: 6, image: 'https://wallpaperaccess.com/full/1534439.jpg', text: 'Texto 6' },
  { id: 7, image: 'https://wallpaperaccess.com/full/1453793.jpg', text: 'Texto 7' },
]);

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
        <div class="carousel__item">
          <img :src="slide.image" :alt="slide.text" class="carousel__image" loading="lazy">
          <p class="carousel__text">{{ slide.text }}</p>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
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
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center -100px;
  margin-left: 20.7px;
}

.carousel__text {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 2em;
  color: #000000 !important;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  display: none;
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
</style>
