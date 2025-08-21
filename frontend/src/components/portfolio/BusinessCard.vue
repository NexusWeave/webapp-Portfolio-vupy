<template>
    <div :class="cls[0]">
        <div v-for="lang in data.lang" :key="lang.id" 
            :class="cls[1]">
            <!--Anchor :cls="[cls[2]]"/-->
            <img 
                :class="[cls[2]]"
                :src="'/media/tech-lang-icons/' + lang.lang + '.svg'" 
                :alt="lang.lang + '.svg'" />
        </div>
        <h3 :class="[cls[3]]" v-if="Array.isArray(data.name)">{{ data.name[1] }}</h3>
        <h3 :class="[cls[3]]" v-else>{{ data.name }}</h3>
        <span :class="[cls[4]]">
            <time v-bind:datetime="data.date">{{ data.date }}</time>
        </span>

        <section class="flex-column">
        <p :class="[cls[3]]">{{ data.description }}</p>
        <p :class="[cls[5]]">{{ data.description }}</p>
        <!--Navigation :data="url" v-for="url in data.links" :cls="[cls[6]]" /-->
        </section>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        data: {
            type: Object,
            required: true
        },
        cls: {
            type: Array,
            default: () => [['card-container', 'grid-container','flex-wrap-column'], 
            ['grid-item-1', 'flex-wrap-row-justify-space-between'],
            'figure-img', 'grid-item-2', 'grid-item-3', 
            ['nav-container', 'flex-wrap-row-justify-space-evenly', 'grid-item-4']]
        }
    });

    const cls = props.cls;
    const data = props.data;
    
</script>