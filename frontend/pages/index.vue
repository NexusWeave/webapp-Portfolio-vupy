<template>
    <section class="flex-wrap-row-justify-space-evenly">
        <section class="flex-column-justify-center-align-center">
            <article v-for="data in personal" :key="data.id" class="bio">
                <h3>{{ data.title }}</h3>
                <ContentRenderer :value="data" />
            </article>
        </section>
    </section>
</template>
<script setup lang="ts">

    const path = 'personal_profile';
    const {data: personal} = await useAsyncData('personal', () => 
    {
        return queryCollection(path).all();
    });

</script>