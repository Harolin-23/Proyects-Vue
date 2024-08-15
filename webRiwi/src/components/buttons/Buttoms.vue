<template>
    <button :class="buttonClass">
        <i :class="iconClass" v-if="icon"></i>
        {{ text }}
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Button',

    props: {
        size: {
            type: String,
            default: "medium"
        },
        icon: {
            type: String,
            default: ""
        },
        text: {
            type: String,
            default: ""
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        buttonClass() {
            return `button ${this.size} ${this.active ? 'active' : ''}`;
        },
        iconClass() {
            return `icon ${this.icon}`;
        }
    }
});
</script>

<style scoped>
.button {
    width: 150px;
    height: 45px;
    border: none;
    background-color: rgba(240, 248, 255, 0);
    font-size: calc(0.1em + 1vw);
    color:rgba(0, 0, 0, 0.363);
   cursor: pointer;
   &:active {
         transform: scale(0.95);
   }
}

.small {
    /* Estilos para el tamaño pequeño */
}

.medium {
    /* Estilos para el tamaño mediano (por defecto) */
}

.large {
    /* Estilos para el tamaño grande */
}

.icon {
    /* Estilos generales del icono */
}

.active {
    background-color:  rgb(104,93,215); /* Cambia este color según tus necesidades */
    color: white;
    width: 150px;
    height: 45px;
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
</style>