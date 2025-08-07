<template>
    <section class="timeline-container">
        <section class ="flex-wrap-row-justify-space-evenly component-blue timeline-line">
            <Timeline v-for="data  in timeline.timelines" 
            :key="data.id" :data="data" :btn ="btn" :cls="[]"
            @toggle-visibility="toggleVisibility(data.id)"/>
        </section>
        <Card v-for="data in timeline.timelines" 
        v-show="data.content.isVisible" :data="data"/>
    </section>  
</template>
<script setup>
    import Timeline from '@/components/academic/Timeline.vue';
    import Card from '@/components/academic/Card.vue';

    import { timelineStore } from '@/stores/timelineStore.js';

    const timeline = timelineStore();
    const btn = {
        cls: 'timeline-btn',
        action: (id) => toggleVisibility(id)
    };

    const toggleVisibility = (id) => {
        const data = timeline.timelines;

        data.forEach(item => {
            if (item.id !== id) item.content.isVisible = false;

            else item.content.isVisible = !item.content.isVisible;
            console.warn("Toggling visibility for ID:", id, item);
        });
        const item = data.find(item => item.id === id);
        
        

        console.log("Timeline after toggling:", data);
    };
</script>