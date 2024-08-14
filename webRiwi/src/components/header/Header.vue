<template>
    <header>
        <div class="container-hed">
            <div class="icon-searc">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <input type="text" placeholder="Search">
            <div class="more-account">
                <i class="fa-solid fa-language"></i>
                <i class="fa-solid fa-sun"></i>
                <i class="fa-solid fa-list"></i>
                <i class="fa-regular fa-bell"></i>
                <div class="account">
                    <img src="../../assets/me.jpg" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',

});
</script>

<style scoped>
header {
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    background-color: #f2f2f2;
    padding: 5px;
    border-radius: 5px;
    box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.096);
}

.container-hed {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1px;
    border-radius: 5px;

    .icon-searc {
        width: 80px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
    input {
        border: none;
        width: 70%;
        background-color: rgba(255, 255, 255, 0);
        height: 100%;
        &:focus {
            border: none;
            outline: none;
            background-color: rgba(255, 255, 255, 0);
        }
    }
    .more-account{
        width: 20%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        font-size: calc(0.1em + 0.8vw);
        color:rgba(0, 0, 0, 0.363);
            i{
                cursor: pointer;
                transition: 0.5s;
                &:hover{
                color: rgb(104,93,215);
                }
                &:active{
                    color: rgb(30, 26, 75);
                }
            }
            .account{
                transition: 0.5s;
                width: 40px;
                height: 40px;
                border-radius: 100%;
                border: 1px solid rgb(104,93,215);
                    &:hover{
                    transform: scale(1.1);
                    
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                        object-fit: cover;
                    }
            }
    }
    

}
  

h1 {
    margin: 0;
}
nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}

nav li {
    margin-right: 10px;
}
</style>