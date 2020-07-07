<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            div Users "{{$route.params.id}}" Pages
            div From Async Data = {{fromAsyncData}}
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    validate({ params: { id } }) {
        console.log('[UsersIdPage] Component.validate(...) > params = ', id);
        return true;
    },
    head(this: UsersIdPage) {
        console.log('[UsersIdPage] Component.head(...)');
        return {
            title: 'UsersIdPage Title',
        };
    },
    asyncData({ params: { id } }) {
        console.log('[UsersIdPage] Component.asyncData(...)');
        // called every time before loading the component
        // as the name said, it can be async
        // Also, the returned object will be merged with your data object

        // The most important key. It can be asynchronous and receives the context as argument.
        return { fromAsyncData: 'fromAsyncData: id = ' + id };
    },
})
export default class UsersIdPage extends Vue {
    fromAsyncData = 'undefined';
    constructor() {
        super();
        console.log('[UsersIdPage] constructor');
    }
}
</script>
