<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            blockquote.blockquote &#8220;{{$t('#inspire.text')}}&#8221;
                footer
                    small
                        em &mdash;John Johnson
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    middleware: ['specific.middleware'],
})
// eslint-disable-next-line prettier/prettier
export default class InspirePage extends Vue {
    constructor() {
        super();
        console.log('[InspirePage] constructor');
    }
}
</script>
