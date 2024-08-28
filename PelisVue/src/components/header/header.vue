<template>
    <header>
        <div class="logo">
                <img src="../../assets/Pasted image 20240813171817.png" alt="Logo">
                <h2>Pelis Vue</h2>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Searh your movies">
        </div>
        <div class="prefencs-user">
            <p><i class="fa-solid fa-user-astronaut"></i><div class="resp-l">Login</div></p>
        </div>
        <div class="country-select">
            <select>
                <option value="en">
                    English
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="English Flag">
                </option>
                <option value="es" selected>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Spanish Flag">
                    Español
                </option>
                <option value="fr">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" alt="French Flag">
                    Français
                </option>
            </select>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        isActive: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
 header{
    background-color: #272727ab;
    color: #fff;
    border-radius: 12px;
    height: 50px;
    width: 98%;
    padding: 10px 0px 10px 0px;
    backdrop-filter: blur(12px );
    box-shadow: 1px 1px 2px 5px solid rgba(0, 0, 0, 0.26);
    position: fixed;
    display: flex;
    align-items: center;
    gap: 1px;
    z-index: 1000;
  }
  .logo {
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
   
    h2{
        position: absolute;
        font-size: calc(1em + 1vw);
        margin-left: 40px;
        cursor: pointer;
    }
    img {
     margin-left: 20px;
     width: 20%;
     height: 100%;
     object-fit: contain;
     cursor: pointer;
    }
    }

    .search-box{
        width: 70%;
        height: 100%;
        padding-top: 10px;
        display: flex;
        justify-content: center;
        input{
            font-size: calc(0.2em + 0.7vw);
            width: 90%;
            height: 70%;
            padding-left: 3%;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.219);
            background-color: rgba(255, 255, 255, 0);
            color: white;
            &:focus{
                outline: none;
                font-size: calc(0.1em + 0.7vw);
            }
        }
    }

    .prefencs-user{
        width:7%;
        height: 80%;
        background-color: rgba(127, 255, 212, 0.678);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: calc(0.4em + 1vw);
        cursor: pointer;
        padding-bottom: 5px;
        box-shadow: 1px 1px 2px 5px solid rgba(0, 0, 0, 0.39);
        p i{
            margin-right: 10px;
        }
        &:hover{
            transform: scale(1.05);
        }
        &:active{
            transform: scale(1);
        }
    }
  
    .country-select {
    select {
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(127, 255, 212, 0.678);
    margin-left: 12px;
    padding: 8px 12px;
    color: #dfd7d7;

    &:focus {
      outline: none;
      border: 1px solid rgb(56, 255, 66)(127, 255, 212, 0.678);
    }
    option {
      display: flex;
      align-items: center;
      padding: 4px;
      color: black;
    }
    img {
      width: 24px;
      height: 16px;
      margin-right: 8px;
      vertical-align: middle;
    }
  }
}

@media screen and (max-width: 1298px) {
    header{
        gap: 10px;
        order: 1;
        z-index: 100000000000;
    }
    .resp-l{
        display: none;
    }
     


      .prefencs-user{
        width: 10%;
        p{
            margin: 0px;
            i{
                margin: 0px
            }
        }
    }

    .prefencs-user{
        font-size: calc(0.5em + 1vw);
    }
    .logo{
        width: 10%;
        margin-right: 12px;
        img{
            width: 100%;
            height: 100%;
        }
        h2{
            display: none;
        }
    }

    .search-box{
        width: 50%;
        input{
        font-size: calc(0.8em + 1vw) !important;
      }
    }


}

@media screen and (max-width: 600px) {
    .country-select{
        display: none;
    }
    .search-box{
        width: 60%;
        input{
       text-align: center;
       font-size: calc(1em + 1vw) !important;
      }
    }

    .prefencs-user{
        width: 20%;
    }
    .logo{
        width: 5%;
    }
}



</style>