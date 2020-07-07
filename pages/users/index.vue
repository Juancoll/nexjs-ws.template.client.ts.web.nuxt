<template lang="pug">
    v-layout
        v-flex.text-center
            img.mb-5(src="/v.png" alt="Vuetify.js")
            div Users Pages
            div Super Var: {{myvar}}
            div Call From URL: {{isLoadedFromUrl}}
            div Call From App: {{isLoadedFromApp}}
</template>
<script lang="ts">
import { Context } from '@nuxt/types';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    validate() {
        console.log('[UsersIndexPage] Component.validate(...)');
        return true;
    },
    head(this: UsersIndexPage) {
        console.log('[UsersIndexPage] Component.head(...)');
        return {
            title: 'UsersIndexPage Title',
        };
    },
    middleware: (_context: Context) => {
        console.log('[UsersIndexPage] Component.middleware(...)');
    },
    asyncData({ req: _req, res: _res }) {
        const fromUrl = _req != undefined;
        console.log('[UsersIndexPage] Component.asyncData(...)');
        console.log('    request = ', _req);
        console.log('    response = ', _res);
        // called every time before loading the component
        // as the name said, it can be async
        // Also, the returned object will be merged with your data object

        // The most important key. It can be asynchronous and receives the context as argument.
        return {
            myvar2: 'my Super asyncData variable',
            isLoadedFromUrl: fromUrl,
            isLoadedFromApp: !fromUrl,
        };
    },
    fetch() {
        // The `fetch` method is used to fill the store before rendering the page
        // Used to fill the store before rendering the page. It's like the asyncData method, except it doesn't set the component data.
    },
    layout: 'default',
    transition: 'test',
})
export default class UsersIndexPage extends Vue {
    isLoadedFromUrl: boolean | undefined = undefined;
    isLoadedFromApp: boolean | undefined = undefined;
    myvar = 'My Super Variable';

    constructor() {
        super();
        console.log('[UsersIndexPage] constructor');
    }
}
</script>

<style lang="scss" scoped>
.test-enter-active,
.test-leave-active {
    transition: opacity 0.1s;
}
.test-enter,
.test-leave-active {
    opacity: 0;
}
</style>
