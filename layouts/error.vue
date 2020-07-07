<template lang="pug">
    v-app(dark)
        h1(v-if="error.statusCode === 404") {{ pageNotFound }}
        h1(v-else) {{ otherError }}
        NuxtLink(to="/")   Home page
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    layout: 'empty',
})
export default class ErrorLayout extends Vue {
    @Prop({ type: Object, default: null }) error: any;
    public pageNotFound = '404 Not Found';
    public otherError = 'An error occurred';

    constructor() {
        super();
        console.log('[ErrorLayout] constructor');
    }

    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return { title };
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 20px;
}
</style>
