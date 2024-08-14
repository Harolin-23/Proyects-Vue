<template>
  <div class="banner">
    <div class="banner-fot">

    </div>
    <div class="profile-card">
      <div class="profile-image">
          <img :src="imagen" alt="Profile Image" class="profile-image" />
      </div>
     <div class="name-links">
        <h2>{{ nombre }}</h2>
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
  display: flex;
  width: 100%;
  height: 30vh;
  flex-direction: column;
  background-color: #e6e6e6;
  .banner-fot{
    height: 60%;
    width: 100%;
    background-color: green;
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
    width: 400px;
    height: 100%;
    
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
</style>
