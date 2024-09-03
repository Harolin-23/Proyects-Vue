<template>
    <div class="card-movie">
        <div class="card-movie__image">
            <img :src="movie.Poster" :alt="movie.Title" class="poster" />
        </div>
        <div class="details">
            <h2>{{ movie.Title }}</h2>
            <div class="more-det">
                    <div class="bet">
                        <p> <b>Year:</b>{{ movie.Year }}</p>
                        <p><b>Type:</b> {{ movie.type }}</p>
                        <button class="redirect-but">Ver mas</button>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardMovie',
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.card-movie {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 250px;
    height: 500px;
    box-shadow: 1px 2px 2px 1px solid rgba(0, 0, 0, 0.541);
    margin-top: 12px;
    border-radius: 12px;
    flex-direction: column;
    align-items: center;
    background-color: rgba(27, 27, 27, 0.103);
    position: relative;
    transition: 0.2s ease-in !important;
    &:hover{
        .more-det{
            display: flex;
        }
    }
}

    .card-movie__image{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
        background-color: azure;
        display: flex;
        justify-content: center;
        padding-right: 0px;
        img{
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
            object-position: center center;
            border-radius: 12px;
            margin: 0px;
        }
    }

.more-det{
    display: none;
    position: absolute;
    top: -2% !important;
    border-radius: 12px;
    width: 92%;
    height: 100%;
    backdrop-filter: blur(3px);
    background-color: rgba(127, 255, 212, 0.205);
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 10px;
    left: 0% !important;
  
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


.details{
    height: 10px;
    
}







.redirect-but{
        width: 200px;
        padding: 12px;
        border-radius: 20px;
        border: 1px solid white;
        color: white;
        font-size: calc(0.3em + 1vw);
        background-color: rgba(255, 255, 255, 0);
        &:hover{
            background-color: rgba(255, 255, 255, 0.5);
            color:  rgb(222, 255, 244);
        }
    }



@media screen and (max-width: 590px) {

    .movies-card-container{
  
        align-items: center !important;
        margin: 0px;
        padding-left: 10%;
        display: flex !important;
        gap: 0px;
    }

    .card-movie{
        height: 500px;
        width: 100%;
       
    }

    .more-det{
        width: 96%;
    }




}

</style>