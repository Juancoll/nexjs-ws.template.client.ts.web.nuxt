<template lang="pug">
    img.VuetifyLogo(alt="Vuetify Logo" src="/vuetify-logo.svg")
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss">
.VuetifyLogo {
    height: 180px;
    width: 180px;
    transform: rotateY(560deg);
    animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
    100% {
        transform: rotateY(0deg);
    }
}
</style>
