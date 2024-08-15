
<template>
    <div class="card-jobGroup">
        <div class="header">
            <img :src="foto" alt="Foto" class="foto-redonda" />
            <h1>{{ titulo }}</h1>
        </div>
        <p>{{ descripcion }}</p>
        <div class="tecnology">
            <p>{{ tecnologia }}</p>
        </div>
        <div class="config-card">
            <i class="fa-regular fa-star"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'teamView',
    props: {
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        tecnologia: {
            type: String,
            required: true
        },
        foto: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.card-jobGroup {
    width: 400px;
    height: 200px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.274) !important;
    font-size: calc(0.2em + 0.6vw);
    color: rgba(0, 0, 0, 0.61);
}

.header {
    display: flex;
    align-items: center;
    gap: 10px;

    img{
     
        border-radius: 50%;
        object-fit: contain;
        object-position: center center;
    }
}

.foto-redonda {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
}

.tecnology {
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
    position: absolute;
    right: 3%;
    padding-bottom: 12px;
    bottom: 3%;
}

.config-card {
    width: 100px;
    height: 20px;
    display: flex;
    gap: 20px;
    position: absolute;
    top: 16%;
    right: 3%;
    justify-content: center;
    font-size: calc(0.3em + 1vw);
}
</style>