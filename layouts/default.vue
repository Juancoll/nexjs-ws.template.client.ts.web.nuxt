<template lang="pug">
    v-app(dark)
        v-navigation-drawer(v-model="drawer" :mini-variant="miniVariant"  :clipped="clipped" fixed app)        
            v-list
                v-list-item(v-for="(item, i) in items" :key="i" :to="localePath(item.to)" router exact nuxt)
                    v-list-item-action
                        v-icon {{ item.icon }}
                    v-list-item-content
                        v-list-item-title(v-text="$t(item.title)")
                        v-list-item-subtitle(v-text="$t(item.description)")
        v-app-bar(:clipped-left="clipped" fixed app)
            v-app-bar-nav-icon(@click.stop="drawer = !drawer")
            v-btn(icon @click.stop="miniVariant = !miniVariant")
                v-icon mdi-{{`chevron-${miniVariant ? 'right' : 'left'}`}}                
            v-btn(icon @click.stop="clipped = !clipped")
                v-icon mdi-application            
            v-btn(icon @click.stop="fixed = !fixed")
                v-icon mdi-minus            
            v-toolbar-title(v-text="title + ' (' + mode + ')'")
            
            v-spacer
            v-btn(icon :to="switchLocalePath('en')" nuxt) en            
            v-btn(icon :to="switchLocalePath('es')" nuxt) es                         
            v-btn(icon @click.stop="rightDrawer = !rightDrawer")
                v-icon mdi-menu
        v-main
            v-container
                nuxt
        v-navigation-drawer(v-model="rightDrawer" :right="right" temporary fixed)
            v-list
                v-list-item(@click.native="right = !right")
                    v-list-item-action
                        v-icon(light) mdi-repeat
                    v-list-item-title Switch drawer (click me)
        v-footer(:absolute="!fixed" app)
            span &copy; {{ new Date().getFullYear() }}
            span {{ $nuxt.isOffline ? ' is offline' : ` is online` }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface IItem {
    icon: string;
    title: string;
    description: string;
    to: string;
}

@Component
export default class DefaultLayout extends Vue {
    public clipped = false;
    public drawer = false;
    public fixed = false;
    public items: IItem[] = [
        {
            icon: 'mdi-apps',
            title: '#home.item.title',
            description: '#home.item.description',
            to: '/',
        },
        {
            icon: 'mdi-chart-bubble',
            title: '#inspire.item.title',
            description: '#inspire.item.description',
            to: '/inspire',
        },
        {
            icon: 'mdi-chart-bubble',
            title: '#routing.item.title',
            description: '#routing.item.description',
            to: '/routing',
        },
        {
            icon: 'mdi-chart-bubble',
            title: '#counter.item.title',
            description: '#counter.item.description',
            to: '/counter',
        },
    ];

    public miniVariant = false;
    public right = true;
    public rightDrawer = false;
    public title = 'tradin marketplace';
    public mode: string;

    constructor() {
        super();
        console.log('[DefaultLayout] constructor');
        // eslint-disable-next-line prettier/prettier
        this.mode = process.env.NODE_ENV == 'development'
            ? process.env.NODE_ENV
            : '';

    }
}
</script>

<style lang="scss">
@import '~/assets/scss/index.scss';
</style>
