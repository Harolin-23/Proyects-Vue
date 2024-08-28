<template>
    <div class="card-movie">
        <div class="card-movie__image">
            <img :src="movie.Poster" :alt="movie.Title" class="poster" />
        </div>
        <div class="details">
            <h2>{{ movie.Title }}</h2>
            <p>Year: {{ movie.Year }}</p>
            <p>Type: {{ movie.type }}</p>
            <button class="redirect-but">Ver mas</button>
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
    height: 400px;
    box-shadow: 1px 2px 2px 1px solid rgba(0, 0, 0, 0.541);
    margin-top: 12px;
    border-radius: 12px;
    flex-direction: column;
    align-items: center;
    background-color: rgb(27, 27, 27);
    position: relative;
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

.poster {
    width: 150px;
    height: auto;
    margin-right: 20px;
}

.details {
    flex: 1;
}

h2 {
    margin: 0;
    font-size: 18px;
}

p {
    margin: 5px 0;
    font-size: 14px;
}

.redirect-but{
    width: 100%;
    height: 25px;
    padding: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px ;
    background-color: aquamarine;
    color: white
}

</style>