<template>
    <template v-if="props.isVisible && year">
        <h3>
            <time :datetime="year.created?.toISOString()">
                {{ year.created?.getFullYear() }}
            </time>
        </h3>
    </template>
    
</template>
<script setup lang="ts">

    //  --- Import & Interfaces logic
    import { computed, defineProps } from 'vue';
    import type { DateYearProps } from '@/types/props';

    //  --- Props logic
    const props = withDefaults(defineProps<DateYearProps>(),
    {
        isVisible: false
    });

    //  --- Data Definition Logic
    const year = computed(() => 
    {
        const data = props.data
        if (!data || !data.created) return null;

        const createdDate = new Date(data.created);
        const endDate = data.end ? new Date(data.end) : null;
        const updatedDate = data.updated ? new Date(data.updated) : null;

        return {
            end: endDate,
            created: createdDate,
            updated: updatedDate
        };
    });

    //  --- Debugging Logic
    //console.log("DateYear Component : ", year.value);

</script>