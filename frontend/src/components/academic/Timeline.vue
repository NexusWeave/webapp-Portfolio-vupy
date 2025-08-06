<template>
    <section class="flex-column-justify-center-align-center timeline-container" :class="cls">
        <section class ="flex-row-reversed-justify-space-evenly-align-content-center">
                    <h2 :class ="cls">{{ data.year }}</h2>
                </section>
        <section class="flex-row-reversed-justify-space-evenly-align-content-center">
            <button :class="['btn', btn.cls]" @click="btn.action(data.id)"></button>
        </section>

        <section v-show="data.content.isVisable"
            class="flex-wrap-column timeline-content">
            <h3>{{ data.title }}</h3>
            <p>{{ data.description }}</p>

            <section v-if="!!data.content.school" class="flex-column-justify-center-align-center">
                <Anchor :data="data.content.school.anchor" />
                <p>{{ data.content.school.location }}</p>

                <h3 v-if="!!data.content.anchor"> 
                    <Anchor :data="data.content.anchor" />
                </h3>
            </section>
        </section>
    </section>
</template>

<script setup>

    import { computed, defineProps, defineEmits } from 'vue';
    import Anchor from '../navigation/Anchor.vue';

    const props = defineProps({
        data: {
            type: Object,
        },
        cls: {
            type: Array,
        }
    });

    const emits = defineEmits(['toggleVisibility']);
    const cls = props.cls;
    const data = computed(() => props.data);

    const btn = {
        cls: 'timeline-btn',
        action: () => emits('toggleVisibility', data.id)
    };

    console.log(data.value);
</script>