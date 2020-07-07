<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            div Orgs Id "{{$route.params.id}}" Manipulation  Pages
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    validate({ params: { id } }) {
        console.log(
            '[OrgsIdManipulation] Component.validate(...) > params = ',
            id
        );
        return true;
    },
    head(this: UsersIdPage) {
        console.log('[OrgsIdManipulation] Component.head(...)');
        return {
            title: 'OrgsIdManipulation Title',
        };
    },
})
export default class UsersIdPage extends Vue {
    constructor() {
        super();
        console.log('[OrgsIdManipulation] constructor');
    }
}
</script>
