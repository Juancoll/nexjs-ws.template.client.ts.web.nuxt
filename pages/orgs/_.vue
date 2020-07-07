<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            div Orgs Default Pages
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
// eslint-disable-next-line prettier/prettier
export default class OrgsDefaultPage extends Vue {
    constructor() {
        super();
        console.log('[OrgsDefaultPage] constructor');
    }
}
</script>
