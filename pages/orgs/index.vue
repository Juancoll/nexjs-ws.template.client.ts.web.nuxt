<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            div Orgs Pages
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
// eslint-disable-next-line prettier/prettier
export default class OrgsIndexPage extends Vue {
    constructor() {
        super();
        console.log('[OrgsIndexPage] constructor');
    }
}
</script>
