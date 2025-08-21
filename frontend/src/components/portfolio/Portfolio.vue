<template>
    <template v-if="!!pfolio.isLoaded">
        <section id="fullstack"  class="flex-wrap-column">
        <h2>Technical Repositories</h2>
        
        <section class="flex-wrap-column-align-items-center">
            <Pagination class='flex-wrap-row-justify-space-evenly tech-bar':data="pfolio.data.Total" @update="pfolio.current = $event" v-if="pfolio.data.Total"/>
        </section>

        <Repo :data="pfolio.displayData()"/>

    </section>

    {{ pfolio.displayData() }}

    </template>

    <template v-else>
        <section id="fullstack" class="loading">
            <p>Loading Technical Repositories...</p>
        </section>
    </template>
</template>

<script setup>

    //  Importing dependencies
    import { reactive, onMounted, computed } from 'vue';
    import { portfolioStore } from '@/stores/portfolioStore.js';

    //  Importing components
    import Pagination from '@/components/navigation/Pagination.vue';
    import Repo from './Repo.vue';


    //  Initializing reactive objects
    const pfolio = portfolioStore();

    //  Fetching data from the server
    //  Fetching the data from the server
    console.warn("Portfolio API Response :", pfolio.repositories);
</script>