<template>
    <h4 v-if="data.title">{{ data.title }}</h4>
    <ul :class="cls">
        <li v-for="(item, index) in data" :key="index">
            <NavigationAnchor v-if="item.anchor.href"
                :data="item.anchor"
            />
        </li>
    </ul>

</template>
<script setup >
    import { computed, defineProps } from 'vue';

    const props = defineProps({
        data: {
            type: Array,
            required: true
        },
        cls: {
            type: Array,
            required: false
        }
    });

    const data = computed(() => props.data);
    console.warn('List Component loaded with data: ', data.value);
</script>