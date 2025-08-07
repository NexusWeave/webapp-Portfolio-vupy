<template>
    <section :class="['flex-wrap-column', 'timeline-content', {'timeline-active': !!data.content.isVisible }]">

        <template v-if="!!data.content.school">
            <h3 class="timeline-h3">{{ data.title }}</h3>
            <h4 class="timeline-h4">
                <span v-if="!!data.content.school.start">{{'( ' + data.content.school.start}}</span>
                {{!!data.content.school.end ? ' - ' : ')'}}
                <span v-if="!!data.content.school.end">{{data.content.school.end + ' )' }}</span>        
            </h4>

            <section v-if="!!data.content.school"
                class="flex-column-justify-center-align-center">

                <section class="flex-wrap-row-align-content-start-justify-space-evenly">
                    <h4 class="timeline-h4">Skole :</h4>
                    <Anchor :data="data.content.school.anchor" />
                </section>

                <section class="flex-wrap-row-align-content-start-justify-space-evenly">
                    <h4 class="timeline-h4">Sted : </h4>
                    <span v-for="value in data.content.school.location" :key="value">
                        {{ value }}
                    </span>
                </section>
                        
                <section v-if="!!data.content.anchor"
                    class="flex-wrap-row-align-content-start-justify-space-evenly">
                    <h4 class="timeline-h4">Sertifisering :</h4>
                    <Anchor :data="data.content.anchor" />
                </section>

            </section>
        </template>

        <template v-if="!!data.content.employer">

            <h3 class="timeline-h3">
                {{ data.title }}
            </h3>
            <h4 class="timeline-h4">
                <span v-if="!!data.content.employer.start">{{'( ' + data.content.employer.start}}</span>
                {{!!data.content.employer.end ? ' - ' : ')'}}
                <span v-if="!!data.content.employer.end">{{data.content.employer.end + ' )' }}</span>
            </h4>
            <section v-show="!!data.content.isVisible" v-if="!!data.content.employer"
                class="flex-column-justify-center-align-center">

                <section v-if="!!data.content.employer.name">
                    <h4 class="timeline-h4">Arbeidsgiver :</h4>
                    <Anchor :data="data.content.employer.anchor" />
                </section>

                <section v-if="!!data.content.employer.location">
                    <h4 class="timeline-h4">Sted : </h4>
                    <span v-for="value in data.content.employer.location" :key="value">
                        {{ value }}
                    </span>
                </section>

                <section v-if="!!data.content.employer.tech">
                    <h4 class="timeline-h4">Teknologi : </h4>
                    <span class="tech-container">
                        <span v-for="tech in data.content.employer.tech" :key="tech"
                            class="tech-item">
                            {{ tech }}
                        </span>
                    </span>
                </section>

                <section v-if="!!data.content.attest">
                    <h4 class="timeline-h4">Attest : </h4>
                    <Anchor :data="data.content.attest" />
                </section>

            </section>
        </template>
        <section v-if="!!data.description"
            class="timeline-description">
            <p>{{ data.description.summary }}</p>
            <ul v-if="!!data.description.list" class="timeline-list">
                <li v-for="item in data.description.list" :key="item"
                    class="timeline-item">
                    {{ item }}
                </li>
            </ul>
        </section>
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