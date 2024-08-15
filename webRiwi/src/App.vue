
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
            <div class="render-status" >
                <div v-if="activeButton === 'profile'" class="status">
                    
                    <div class="sec-1">
                        <dataUser />
                        <MoredataUser />
                    </div>
                    <div class="sec-2">
                        <Timeline />
                        <div class="sec-3">
                            <conection />
                            <teamsComp />
                        </div>
                        <ListProyect />
                       
                    </div>
                    
                
                   
                </div>
                <div v-else-if="activeButton === 'team'"  class="status">
                    <h1>Team</h1>
                    <p>Team</p>
                </div>
                <div v-else-if="activeButton === 'projects'"  class="status">
                    <h1>Projects</h1>
                    <p>Projects</p>
                </div>
                <div v-else-if="activeButton === 'connections'"  class="status">
                    <h1>Connections</h1>
                    <p>Connections</p>
                </div>
                <div v-else>
                    <h1>Profile</h1>
                    <p>Profile</p>
                </div>
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
import Timeline from './pages/components/user/Timeline.vue';
import ListProyect from './pages/components/user/proyectList.vue'
import dataUser from './pages/components/user/dataUser.vue'
import conection from './pages/components/user/conection.vue'
import teamsComp from './pages/components/user/teams.vue'
import MoredataUser from './pages/components/user/moreInfo.vue'


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
    .sec-1{
       display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .sec-2{
        width: 72%;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .sec-3{
        display: flex;
        gap: 2%;
        width: 100%;
    }

.render-status{
    width: 100%;
    height: auto;
    transition: 0.4s ease-in;
    .status{
        animation-name: op-sect-a;
        animation-duration: 1.5s ;
        animation-fill-mode: forwards;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 12px;
        gap: 20px;
    }
}   
@keyframes op-sect-a{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>
