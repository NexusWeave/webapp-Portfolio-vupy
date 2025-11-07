<template>
    <span :class="cls" :aria-label="label"></span> 
</template>
<script lang="ts" setup>

    // --- Importing dependencies ---
    import type { iconProps } from '@/types/props';

    const props = withDefaults(defineProps<iconProps>(),
    {
        cls: () => [],
        label: () => 'An icon'
    });

</script>