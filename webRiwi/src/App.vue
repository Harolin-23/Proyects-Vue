
<template>
    <div class="container-web">
        <div class="lef-sect">
            <Menu />
        </div>
        <div class="rigth-sect">
            <Header />
            <ProfileCard 
                nombre="John Doe"
                imagen="../src/assets/me.jpg"
            />
        </div>
      
    </div>
</template>

<script setup lang="ts">
    import "./global/gen.scss";
    import Menu from './components/nav-bar/Menu.vue'
    import Header from './components/header/Header.vue'
    import ProfileCard from './components/banner-Sesion/Account.vue'
    let count = 0;
    components: {
    ProfileCard
  }
</script>
<style >

</style>
