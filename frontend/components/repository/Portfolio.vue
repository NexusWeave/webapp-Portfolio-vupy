<template>
    <section class="flex-wrap-column repo-container" v-if="!!data.data && data.data.length > 0">
        <h2>Technical Repositories</h2>

        <section class="repo-container flex-wrap-row-justify-center">
            <section class="flex-wrap-row">

                <RepositoryBusinessCard v-for="repo in data.data"
                    :key="repo.id"
                    :data="repo"
                />
            
            </section>
        </section>
    </section>
</template>

<script setup lang="ts">

    //  Importing dependencies & types
    import { fetchRestApi as fetchRestApi } from '#imports';
    import { computed } from 'vue';

    //  --- API Fetching Logic
    const repoData = await fetchRestApi('github', 'repo-data')
    const data =  computed(() => repoData.value);
    
    //  --- Debugging Logic
    //console.warn("Portfolio API Response :", data.value);
</script>