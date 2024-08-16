
```vue
<template>
    <div :class="{'dark': isDarkMode}" class="container-web">
        <div class="lef-sect">
            <Menu />
        </div>
        <div class="rigth-sect">
            <Header @toggleDarkMode="toggleDarkMode"/>
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
            <div class="render-status">
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
                <div v-else-if="activeButton === 'team'" class="status cards-contApp">
                    <teamView 
                        titulo="Desarrollo React" 
                        descripcion="Se requiere equipo de mantenimiento" 
                        tecnologia="React"
                        foto="https://th.bing.com/th/id/OIP.trOsAeDjlsjc5ZpVh9PhKQHaHa?rs=1&pid=ImgDetMain"
                    />
                    <teamView 
                        titulo="Desarrollo Vue" 
                        descripcion="Se requiere equipo de desarrollo" 
                        tecnologia="Vue"
                        foto="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
                    />
                    <teamView 
                        titulo="Svelte" 
                        descripcion="Se requiere equipo de desarrollo" 
                        tecnologia="Svelte"
                        foto="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                    />
                    <teamView 
                        titulo="Node.js" 
                        descripcion="Se requiere equipo de backend" 
                        tecnologia="Node.js"
                        foto="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    />
                    <teamView 
                        titulo="Django" 
                        descripcion="Se requiere equipo de backend" 
                        tecnologia="Django"
                        foto="https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg"
                    />
                    <teamView 
                        titulo="Flask" 
                        descripcion="Se requiere equipo de backend" 
                        tecnologia="Flask"
                        foto="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg"
                    />
                    <teamView 
                        titulo="Laravel" 
                        descripcion="Se requiere equipo de backend" 
                        tecnologia="Laravel"
                        foto="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg"
                    />
                    <teamView 
                        titulo="Spring" 
                        descripcion="Se requiere equipo de backend" 
                        tecnologia="Spring"
                        foto="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
                    />
                </div>
                <div v-else-if="activeButton === 'projects'" class="status">
                      <ListProyectCards :projects="moreData" />
                </div>
                <div v-else-if="activeButton === 'connections'" class="status cards-contApp">
                    <conectCards :people="peopleData" />
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
import ListProyect from './pages/components/user/proyectList.vue';
import dataUser from './pages/components/user/dataUser.vue';
import conection from './pages/components/user/conection.vue';
import teamsComp from './pages/components/user/teams.vue';
import MoredataUser from './pages/components/user/moreInfo.vue';
import teamView from './pages/components/groups/teamView.vue';
import conectCards from './pages/components/conections/conectCards.vue';
import ListProyectCards from './pages/components/proyects/proyectsView.vue'

import { ref } from "vue";

const activeButton = ref<string | null>('profile');
const isDarkMode = ref<boolean>(false);

const peopleData = ref([
    {
        id: 1,
        name: 'John Doe',
        position: 'Frontend Developer',
        skill: 'React',
        numProjects: 5,
        numTasks: 20,
        numConnections: 15,
        imagen: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Backend Developer',
        skill: 'Node.js',
        numProjects: 3,
        numTasks: 15,
        numConnections: 10,
        imagen: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        position: 'Full Stack Developer',
        skill: 'Vue.js',
        numProjects: 7,
        numTasks: 25,
        numConnections: 20,
        imagen: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
        id: 4,
        name: 'Bob Brown',
        position: 'DevOps Engineer',
        skill: 'AWS',
        numProjects: 4,
        numTasks: 18,
        numConnections: 12,
        imagen: 'https://randomuser.me/api/portraits/men/4.jpg'
    },
    {
        id: 5,
        name: 'Charlie Davis',
        position: 'Data Scientist',
        skill: 'Python',
        numProjects: 6,
        numTasks: 22,
        numConnections: 17,
        imagen: 'https://randomuser.me/api/portraits/men/5.jpg'
    }
]);


    const moreData = ref([
    {
        title: 'Social Banners',
        client: 'Christian Jimenez',
        currentBudget: '$24.8k',
        totalBudget: '$18.2k',
        startDate: '14/2/21',
        deadline: '28/2/22',
        description: 'We are Consulting, Software Development and Web Development Services.',
        allHoursCompleted: 380,
        allHoursTotal: 244,
        taskCompleted: 290,
        taskTotal: 344,
        progress: 95,
        daysLeft: 28,
        members: [
            { name: 'John Doe', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
            { name: 'Jane Smith', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
            { name: 'Alice Johnson', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
        ],
        memberCount: 280,
        commentsCount: 15,
        icon: 'fas fa-globe',
    },
    {
        title: 'Marketing Campaign',
        client: 'Laura Martinez',
        currentBudget: '$30.5k',
        totalBudget: '$50k',
        startDate: '1/3/21',
        deadline: '1/6/22',
        description: 'Marketing campaign for new product launch.',
        allHoursCompleted: 500,
        allHoursTotal: 600,
        taskCompleted: 400,
        taskTotal: 450,
        progress: 88,
        daysLeft: 60,
        members: [
            { name: 'Michael Brown', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' },
            { name: 'Emily Davis', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' },
            { name: 'David Wilson', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
        ],
        memberCount: 150,
        commentsCount: 20,
        icon: 'fas fa-bullhorn',
    },
    {
        title: 'Website Redesign',
        client: 'Carlos Lopez',
        currentBudget: '$15k',
        totalBudget: '$25k',
        startDate: '10/1/21',
        deadline: '10/5/22',
        description: 'Complete redesign of the company website.',
        allHoursCompleted: 200,
        allHoursTotal: 300,
        taskCompleted: 150,
        taskTotal: 200,
        progress: 75,
        daysLeft: 90,
        members: [
            { name: 'Sarah Miller', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' },
            { name: 'James Anderson', avatar: 'https://randomuser.me/api/portraits/men/8.jpg' },
            { name: 'Patricia Thomas', avatar: 'https://randomuser.me/api/portraits/women/9.jpg' },
        ],
        memberCount: 100,
        commentsCount: 10,
        icon: 'fas fa-laptop',
    },
    {
        title: 'Mobile App Development',
        client: 'Ana Gonzalez',
        currentBudget: '$40k',
        totalBudget: '$60k',
        startDate: '5/2/21',
        deadline: '5/8/22',
        description: 'Development of a new mobile application.',
        allHoursCompleted: 600,
        allHoursTotal: 800,
        taskCompleted: 500,
        taskTotal: 600,
        progress: 83,
        daysLeft: 120,
        members: [
            { name: 'Robert Martinez', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
            { name: 'Linda Rodriguez', avatar: 'https://randomuser.me/api/portraits/women/11.jpg' },
            { name: 'William Hernandez', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
        ],
        memberCount: 200,
        commentsCount: 25,
        icon: 'fas fa-mobile-alt',
    },
    {
        title: 'SEO Optimization',
        client: 'Miguel Ramirez',
        currentBudget: '$10k',
        totalBudget: '$15k',
        startDate: '20/3/21',
        deadline: '20/9/22',
        description: 'SEO optimization for better search engine ranking.',
        allHoursCompleted: 150,
        allHoursTotal: 200,
        taskCompleted: 120,
        taskTotal: 150,
        progress: 80,
        daysLeft: 180,
        members: [
            { name: 'Barbara Clark', avatar: 'https://randomuser.me/api/portraits/women/13.jpg' },
            { name: 'Paul Lewis', avatar: 'https://randomuser.me/api/portraits/men/14.jpg' },
            { name: 'Jessica Walker', avatar: 'https://randomuser.me/api/portraits/women/15.jpg' },
        ],
        memberCount: 50,
        commentsCount: 5,
        icon: 'fas fa-search',
    }
    ])


function setActiveButton(button: string) {
    activeButton.value = button;
}

function toggleDarkMode() {
    isDarkMode.value = !isDarkMode.value;
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
.sec-1 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.sec-2 {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.sec-3 {
    display: flex;
    gap: 2%;
    width: 100%;
}
.cards-contApp {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 10px;
}
.render-status {
    width: 100%;
    height: auto;
}
.status {
    animation-name: op-sect-a;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 12px;
    gap: 20px;
}
@keyframes op-sect-a {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media screen and (max-width: 1360px) {
    .sec-1{
        width: 100%;
        justify-content: center;
  
   
        .user-profile{
            width: 100%;
            font-size: calc(1em + 1vw) !important;
        }
    }

    .sec-2{
        width: 100%;
        .sec-3{
            width: 100% !important;
            display: flex;
            flex-direction: column;
            gap: 20px;
          
            .team-list{
                width: 100% !important;
            }
            .connection-list{
                width: 100% !important;
            }
        }

    }

    .status{
        display: flex;
        transition: 0.3s;
    }
}
</style>
