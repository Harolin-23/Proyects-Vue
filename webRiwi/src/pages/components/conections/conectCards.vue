<template>
 
        <div v-for="person in people" :key="person.id" class="card-conection">
            <div class="img-cont">
                <img :src="person.imagen" :alt="person.name" />
            </div>
            <div class="text-in">
                <h2>{{ person.name }}</h2>
                <p>{{ person.position }}</p>
            </div>
            <div class="op-c">
                <div class="skill">
                <p> {{ person.skill }}</p>
            </div>
            </div>
            <div class="more-info">
                <div class="p-num">
                    <h2>{{ person.numProjects }} </h2>
                       <p> Projects </p>
                </div>
                <div class="p-num">
                    <h2>{{ person.numTasks }} </h2>
                       <p>  Tasks</p>
                </div>
                <div class="p-num">
                    <h2>{{ person.numConnections }} </h2>
                       <p> Connections</p>
                </div>
            </div>
            <div class="conect-md">
                <button class="addB"><i class="fa-solid fa-user-plus"></i> Conect</button>
                <button><i class="fa-regular fa-envelope"></i></button>
            </div>
        </div>
  
</template>

<script>

import Buttoms from '../../../components/buttons/Buttoms.vue';
import { ref } from "vue";


const activeButton = ref(true);

export default {
    name: 'conectCards',
    props: {
        people: {
            type: Array,
            required: true
        }
    }
   

}
</script> 


<style lang="scss" scoped>

.card-conection {
    width: 400px;
    height: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.274) !important;
    font-size: calc(0.2em + 0.6vw);
    color: rgba(0, 0, 0, 0.61);
    
}
.img-cont{
        width: 100%;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
       

        img{
            width: 100px;
            height:  100px;
            border-radius: 100%;
            border: 1px solid aqua;
            object-fit: cover;
            object-position: center center;
        }
    }
    .text-in{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: auto;
        margin: 12px;
        h2{
            font-size: calc(0.7vw + 1vw);
        }
    }
    .op-c{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 12px;
    }

    .skill{
    width: 70px;
    height: 25px;
    padding: 10px;
    background-color: #3068b179;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 12px;
    border: 1px solid rgb(255, 255, 255);
 
    }
    .more-info{
        margin-top: 12px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding-left: 2%;
        padding-right: 2%;
    }
    .p-num{
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: calc(0.2vh + 0.6vw);
    }
    .conect-md{
        margin-top: 12px;
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        .addB{
            background-color:  rgb(104,93,215); 
            color: white;
            width: 35%;
             height: 30px;
            border: none;
            transition: 0.3s ease-in;
            border-radius: 6px;
            font-size: 1.2em;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            i{
            margin-right: 5px;
            }
            }
    }
</style>