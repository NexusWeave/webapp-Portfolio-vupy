<template>
    <section v-if="timeline.isLoaded" 
        class="timeline-container component-blue timeline-container">

        <section class="flex-wrap-row-justify-space-evenly component-blue timeline-line">
            <Timeline
            :data="timeline.timelineRange"
            :cls="[['flex-column-align-items-center', 'timeline-item'],
                'title-h2', ['timeline-input-label', 'timeline-input']]"
            @toggle-visibility="toggleVisibility"/>
        </section>
        <section class="flex-wrap-row-justify-space-evenly component-blue">
                <Card v-for="data in timeline.timelines" :key="data.id"
                    :data="data"
                    v-show="!!data.content.isVisible"/>
        </section>
    </section>  
</template>
<script setup>
    import Timeline from '@/components/academic/Timeline.vue';
    import Card from '@/components/academic/Card.vue';

    import { timelineStore } from '@/stores/timelineStore.js';

    const timeline = timelineStore();


    const toggleVisibility = (id) => {
        const data = timeline.timelines;

        data.forEach(item => {
            if (item.id != id) item.content.isVisible = false;
            else item.content.isVisible = !item.content.isVisible;
        });
        console.warn("Toggling visibility for ID:", data[id]);
    };
    console.warn("Timeline data on load:", timeline.timelines);
</script>