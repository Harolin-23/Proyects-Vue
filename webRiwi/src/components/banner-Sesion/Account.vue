<template>
  <div class="banner">
    <div class="banner-fot">
        <img src="../../assets//34348.jpg" alt="">
    </div>
    <div class="profile-card">
      <div class="profile-image">
          <img :src="imagen" alt="Profile Image" class="profile-image" />
      </div>
     <div class="name-links">
        <h2>{{ nombre }}</h2>
        <div class="container-links">
            <p><i class="fa-solid fa-palette"></i>Coder</p>
            <p><i class="fa-solid fa-location-dot"></i>Medellin</p>

            <p><i class="fa-regular fa-calendar"></i>Joinded Ayer</p>
        </div>
     </div>
      
  </div>
</div>
 
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProfileCard',
  props: {
    nombre: {
      type: String as PropType<string>,
      required: true
    },
    imagen: {
      type: String as PropType<string>,
      required: true
    }
  }
});
</script>

<style scoped>

.banner{
  box-shadow:
  0.3em 0.3em 1em rgba(0, 0, 0, 0.096);
  display: flex;
  width: 100%;
  height: 30vh;
  flex-direction: column;
  background-color: #e6e6e6;
  margin-top: 8%;
  .banner-fot{
    height: 60%;
    width: 100%;
    transition: 0.4s;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .profile-card{
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    gap: 1%;
  }

}
.profile-card {
  display: flex;
  object-fit: cover;
  padding: 10px;
  object-position: center center;
  border-radius: 8px;
  text-align: center;

  .name-links{
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 12px;
    width: 500px;
    height: 100%;
    font-size: calc(0.3em + 1vw);
      .container-links{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 20px;
        p{
          display: flex;
          gap: 10px;
          font-size: calc(0.1em + 1vw);
          color:rgba(0, 0, 0, 0.363);
          cursor: pointer;
          transition: 0.5s;
          &:hover{
            color: blueviolet;
          }
        }
      }
    
  }


}

.profile-image {
  width: 100px;
  height: 100px;
  border: 2px solid white;
  margin-bottom: 10px;
  left: 0;
  display: flex;

  justify-content: center;
}

h2 {
  font-size: 1.2em;
  margin: 0;
}

@media screen and (max-width: 1360px) {
  .name-links{
    font-size: calc(1em + 1vw) !important;
  }

  p{
    font-size: calc(0.5em + 1vw) !important;
  }

  .container-links{
    margin-top: 12px;
  }


}

@media screen and (max-width: 830px) {
  .container-links{
    font-size: calc(1.2em + 1vw) !important;
    width: 100%;
    height: 100%;
  }


  .profile-card{
    width: 100%;
    padding: 0px !important;
  }
  .name-links{
    padding-top: 12px;
    width: 800px !important;
    padding: px 0px 0px 0px!important;
  }
}


</style>
