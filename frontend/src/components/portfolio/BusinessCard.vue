<template>
    <section :class="cls[0]">
        <div v-for="lang in data.lang" :key="lang.id" 
            :class="cls[1]">
            <Figure
                :data="lang"
                :cls="['tech-figure', 'tech-img']"
            />
        </div>
        <section class="flex-wrap-row">
            <h3 :class="[cls[2]]" v-if="Array.isArray(data.name)">{{ data.name[1] }}</h3>
            <h3 :class="[cls[2]]" v-else>{{ data.name }}</h3>
            <span :class="[cls[3]]">
                <time v-bind:datetime="data.date">{{ data.date }}</time>
            </span>
        </section>

        <section class="flex-column">
            <p :class="[cls[4]]">{{ data.description }}</p>

            <Navigation :cls="cls[5]"
            :data="data.anchor"
             />
        </section>
    </section>
</template>
<script setup>
    import { defineProps } from 'vue';

    import Figure from '../media/Figure.vue';
    import Navigation from '@/components/navigation/NavMenu.vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            default: () => [
                ['card-container', 'flex-column','flex-wrap-column'], 
                ['grid-item-1', 'flex-wrap-row-justify-space-between'],
                'title-h3', 'date-container',  'ts',
                [ ['nav-bar'], ['nav-list', 'flex-row-align-items-center'],
                ['nav-item'], ['anchor-item'],
                'grid-item-4']
        ]
        }
    });

    const cls = props.cls;
    const data = props.data;
    
</script>