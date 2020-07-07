<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            div Orgs Id "{{$route.params.id}}" Description  Pages
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    validate({ params: { id } }) {
        console.log(
            '[OrgsIdDescription] Component.validate(...) > params = ',
            id
        );
        return true;
    },
    head(this: UsersIdPage) {
        console.log('[OrgsIdDescription] Component.head(...)');
        return {
            title: 'OrgsIdDescription Title',
        };
    },
})
export default class UsersIdPage extends Vue {
    constructor() {
        super();
        console.log('[OrgsIdDescription] constructor');
    }
}
</script>
