<template>
    <section :class="cls[0]">
        <h2 :class="cls[1]">{{ !!data.title ? data.title : "Untitled Timeline" }}</h2>
        <FormInputs v-if="data.range.rangeMax > 0" :data="data.range"
            :cls="[cls[2]]" v-model="modelValue" />
    </section>
</template>

<script setup lang="ts">

    //  --- Import & Interfaces logic
    import {computed } from 'vue';

    interface Props
    {
        cls?: Array<any>;
        data:Record<string, any>;
    }

    //  --- Props definition
    const props = withDefaults(defineProps<Props>(),
    {
        cls: () => []
    });

    const cls = computed(() => props.cls);
    const data = computed(() => props.data);
    const emits = defineEmits(['toggleVisibility']);

    const modelValue = computed(
        {
            get: () => data.value.value,
            set: (value) => 
            {
                emits('toggleVisibility', value);
            }
            
        });

</script>