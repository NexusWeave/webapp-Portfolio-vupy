<template>
    <section :class="['flex-wrap-row-justify-space-evenly']">
        <Timeline v-if="academicData.length > 0"
            title="Akademisk Tidslinje"
            :data="academicData"
            :cls = "['component-blue', 'timeline-container',
            'timeline-line', 'flex-wrap-row-justify-space-evenly', 'component-w-g-b']"
        />

    </section>
</template>
<script setup lang="ts">

    //  --- Import & Interfaces logic
    import { portfolioStore } from '~/stores/portfolioStore';

    
    //  --- Data Fetching Logic
    async function fetchCollection(path:any)
    {
        const {data: aca_info} = await useAsyncData('academic-info', () => 
        {
            return queryCollection(path).all();
        });
        if(aca_info.value)
        {
            console.log("Academic info:", aca_info.value);
            return aca_info.value;
        }
        else
        {
            console.warn("No academic info found!");
            return [];
        }
    }
    
    const academicData = await fetchCollection('academic');
    //const achievements = await fetchCollection('achievements');

    //  --- Debugging Logic
    //console.log("Processed timeline:", academicData);
    //console.log("Achievements data on load:", achievements);
</script>