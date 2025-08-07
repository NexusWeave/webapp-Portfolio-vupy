<template>
    <section class ="flex-column-align-items-center timeline-item">
        <h2 class ="timelineStore-h2">{{ data.year }}</h2>
        <button :class="['btn', 'timeline-btn']" @click="btn.action(data.id)"></button>
    </section>
    <section>
    </section>
</template>

<script setup>

    import { computed, defineProps, defineEmits } from 'vue';
    import Anchor from '../navigation/Anchor.vue';

    const props = defineProps({
        data:
        {
            type: Object,
        },
        cls:
        {
            type: Array,
        },
        btn :
        {
            type: Object,
        },
    });

    
    const cls = !!props.cls ? props.cls : null;
    const btn = computed(() => props.btn);
    const data = computed(() => props.data);
    const emits = defineEmits(['toggleVisibility']);

    console.log("Timeline data:", data.value);
</script>