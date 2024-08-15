
```vue
<template>
    <div class="container-web">
        <div class="lef-sect">
            <Menu />
        </div>
        <div class="rigth-sect">
            <Header />
            <ProfileCard 
                nombre="Harol Chaverra"
                imagen="../src/assets/me.jpg"
            />
        
            <div class="actions-status">
                <Buttoms
                    size="medium"
                    icon="fa-regular fa-user"
                    text="Profile"
                    :active="activeButton === 'profile'"
                    @click="setActiveButton('profile')"
                />
                <Buttoms
                    size="medium"
                    icon="fa-solid fa-users"
                    text="Team"
                    :active="activeButton === 'team'"
                    @click="setActiveButton('team')"
                />
                <Buttoms
                    size="medium"
                    icon="fa-solid fa-table-cells-large"
                    text="Projects"
                    :active="activeButton === 'projects'"
                    @click="setActiveButton('projects')"
                />
                <Buttoms
                    size="medium"
                    icon="fa-solid fa-link"
                    text="Connections"
                    :active="activeButton === 'connections'"
                    @click="setActiveButton('connections')"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import "./global/gen.scss";
import Menu from './components/nav-bar/Menu.vue';
import Header from './components/header/Header.vue';
import ProfileCard from './components/banner-Sesion/Account.vue';
import Buttoms from './components/buttons/Buttoms.vue';
import { ref } from "vue";

const activeButton = ref<string | null>('profile');

function setActiveButton(button: string) {
    activeButton.value = button;
}

  

</script>

<style scoped>
.actions-status {
    width: 100%;
    height: 50px;
    display: flex;
    gap: 12px;
    align-items: center;
    padding-left: 12px;
}
</style>
