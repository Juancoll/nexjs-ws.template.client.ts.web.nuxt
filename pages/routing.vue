<template lang="pug">
    v-layout(column justify-center align-center)
        v-flex(xs12 sm8 md6)
            v-card
                v-card-title.headline Users Dinamic Routing Samples 
                v-card-text
                    p
                        nuxt-link(to="users") /users
                    p
                        nuxt-link(to="users/32") /users/:id (32)
                    p 
                        nuxt-link(to="users/asdfasdfggdsa") /users/:id (asdfasdfggdsa)  
                    p look at the console output (validate function call)  
        v-flex(xs12 sm8 md6)
            v-card
                v-card-title.headline Orgs Dinamic Routing Samples 
                v-card-text
                    p
                        nuxt-link(to="orgs") /orgs
                    p
                        nuxt-link(to="orgs/about") /orgs/[anything not defined] - ("orgs/about")
                    p  
                        nuxt-link(to="orgs/32/description") orgs/:id/description (32)         
                    p  
                        nuxt-link(to="orgs/asdfasdfggdsa/manipulation") orgs/:id/manipulation (asdfasdfggdsa)                  
                    p   look at the console output (validate function call)  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RoutingPage extends Vue {
    constructor() {
        super();
        console.log('[RoutingPage] constructor');
    }
}
</script>
