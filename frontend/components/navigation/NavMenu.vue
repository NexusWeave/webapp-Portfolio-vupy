<template>
    <nav :class="cls[0]">
        <ul :class="cls[1]">
            <li v-for="item in data" :key="item.id"
                    :class="cls[2]">
            <template v-if="isRouterLink">
                <NuxtLink :to="item.href" :class="[item.cls, 'nav-link']">
                    {{ item.label }}
                </NuxtLink>
            </template>

            <template v-else-if="isAnchor">
                    <NavigationAnchor :data="item" :cls="[item.cls]"/>
            </template>

            <template v-else-if="isPagination">
                <NavigationButton :data="btn[0]"/>
                <span :class="cls[3]"> {{ activePage > 0 ?  activePage + ' / ' + totalPages : '' }}</span>
                <NavigationButton :data="btn[1]"/>
            </template>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>

    //  --- Importing dependencies & type definitions ---
    import { ref, watch, computed } from 'vue';

    //  --- Props Definition ---
    const props = withDefaults(defineProps<NavProp>(),
    {
        totalPage: 0,
        activePage: 0,
        cls: () => [['nav-bar', 'flex-wrap-row'], [['nav-list', 'flex-wrap-row-justify-center'], 'flex-row-align-items-center'], 'nav-item', 'anchor-item'],
    });

    const data = props.data;

    const isAnchor = computed(() => props.toggle === 'anchor');
    const isRouterLink = computed(() => props.toggle === 'router');
    const isPagination = computed(() => props.toggle === 'pagination');

    //  --- Pagination Logic ---

    const activePage = ref(props.activePage);
    const totalPages = computed(() => props.totalPage);
    const btn = computed(() =>
        [
            {
                id: 0,
                label: 'Forrige',
                cls: ['button', 'pagnition-btn'],
                disabled: activePage.value <= 1 ? 'disabled' : false,
                action: () => { if (activePage.value > 1)  activePage.value--; },

            },
            {
                id: 1,
                label: 'Neste',
                cls: ['button', 'archive-btn'],
                disabled: activePage.value >= totalPages.value? 'disabled' : false,
                action: () => { if (activePage.value < totalPages.value)  activePage.value++; },
            },
        ]);

    //  Watch for changes in the 'data' prop
    watch(() => props.activePage, (newValue) => 
    {
        activePage.value = newValue;
    });

    //  --- Emits definition ---
    const emit = defineEmits(['update']);

    watch(() => activePage, (newValue) => 
    {
        emit('update', newValue);
    }, { immediate: true });

    //  --- Debug logic
    console.log("NavigationMenu loaded with data: ", data, isAnchor, isRouterLink);
</script>