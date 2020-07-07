<template lang="pug">
    v-layout
        v-flex.text-center
            div.flex.h-container
                v-btn(@click="inc()" small color="primary") INCREMENT
                v-btn(@click="dec()" small color="primary") DECREMENT
            div counter = {{counter}}
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import CounterStore from '~/store/modules/counter';

@Component
export default class CounterPage extends Vue {
    public counter: number = 0;

    private store: CounterStore;

    constructor() {
        super();
        console.log('[InspirePage] constructor');

        this.store = getModule(CounterStore, this.$store);
        console.log(this.store);
        this.counter = this.store.getCounter;
        console.log(this.counter);
    }

    public inc() {
        this.store.Increment();
    }

    public dec() {
        this.store.Decrement();
    }
}
</script>
