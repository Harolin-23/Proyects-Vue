

<script setup lang="ts">
    import "./global/gen.scss";
    import Menu from './components/nav-bar/Menu.vue'
    import Header from './components/header/Header.vue'
    let count = 0;
</script>


<template>
    <div class="container-web">
        <div class="lef-sect">
            <Menu />
        </div>
        <div class="rigth-sect">
            <Header />
           
        </div>
      
    </div>
</template>
<style >

</style>
