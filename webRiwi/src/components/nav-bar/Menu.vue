
<template>
    <div class="menu">
        <div class="sup-case">
            <div class="logo">
                <img src="../../assets//logo.png" alt="">
            </div>
            <div class="container-icons">
                <i class="fa-solid fa-house"></i>
                <i class="fa-regular fa-copy"></i>
            </div>
        </div>
        <hr class="sep-hr">
        <div class="oth-case">
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-graduation-cap"></i>
            <i class="fa-solid fa-truck"></i>
            <i class="fa-regular fa-envelope"></i>
            <i class="fa-regular fa-comment"></i>
            <i class="fa-regular fa-calendar"></i>
            <i class="fa-solid fa-chart-simple"></i>
            <i class="fa-regular fa-file"></i>
            <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-lock"></i>
            <i class="fa-regular fa-file"></i>
            <i class="fa-solid fa-shield-halved"></i>
            <i class="fa-solid fa-ellipsis"></i>
            <i class="fa-regular fa-square"></i>
        </div>
    </div>
   

</template>

<script lang="ts">
export default {
  name: 'Menu',
};
</script>

<style lang="scss" scoped>
.menu {

    width: 50px;
    height: 100%;
   display: flex;
   align-items: center;
   font-size: calc(0.4em + 0.3vw);
   flex-direction: column;
   transition: 0.1s;
   position: fixed;
   gap: 12px;
   box-shadow:
    0.3em 0.3em 1em rgba(0, 0, 0, 0.11);
    .sup-case{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .oth-case{
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 30px;
        font-size: calc(0.4em + 1vw);
        color:rgba(0, 0, 0, 0.363);
        margin-bottom: 30px;
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



    }
    .sep-hr{
        width: 50%;
    }

}
    .logo{
     
        width: 100%;
        height: 100px;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width:50%;
            height: 50%;
            object-fit: contain;
        }
    }

.container-icons{

    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    font-size: calc(0.4em + 1vw);
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

    
}

@media screen and (max-width: 1360px) {

    .menu{
        background-color: rgba(255, 255, 255, 0.74);
        z-index: 20;
        flex-direction: row;
        width: 100%;
        height: 100px;
        backdrop-filter: blur(10px);
        bottom: 0;
        font-size: calc(2em + 1vw);
        justify-content: space-around;
        .logo{
            display: none;
        }
    }
    .sup-case{
        display: none !important;
          height: 100%;
        }

        .sep-hr{
            display: none;
        }
        .oth-case{
            flex-direction: row !important;
            justify-content: space-around;
            align-items: center;
            gap: 1px;
            height: 100%;
            overflow-x: auto;
            padding-right: 30px;
            padding-left: 30px
        }


}






</style>