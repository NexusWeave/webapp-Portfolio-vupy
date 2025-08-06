<template>

    <section>
        <h2>Akademisk Reise</h2>

        <section class ="flex-wrap-row-justify-space-evenly timeline-container">
            <Timeline v-for="data  in timeline" 
            :key="data.id" :data="data"
            @toggle-visibility="toggleVisibility(data.id)"/>
        </section>
    </section>
</template>
<script setup>
    import Timeline from '@/components/academic/Timeline.vue'
import { computed, reactive } from 'vue';

    const timeline = reactive(
    [
        {
            id: 0,
            year: 2016,
            title: 'Bygg og Anlegg',
            description: 'Fullført Bygg og Anlegg med gode resultater.',

            content:
            {
                isVisable: false,

                school :
                {
                    name: 'Borgund VGS',
                    location: 'Ålesund, Norge',
                    anchor:
                    {
                        label: 'Borgund VGS Skole',
                        href: 'https://example.com/',
                    },
                },

                anchor:
                {
                    label: 'Vitnemål',
                    href: 'https://example.com/vitnemal',
                },
            },
        },
        {
            id: 1,
            year: 2018,
            title: 'Helsefag',
            description: 'Fullført Helsefag med gode resultater.',

            content:
            {
                isVisable: false,

                school :
                {
                    name: 'Borgund VGS',
                    location: 'Ålesund, Norge',
                    anchor:
                    {
                        label: 'Borgund VGS Skole',
                        href: 'https://example.com/',
                    },
                },

                anchor:
                {
                    label: 'Vitnemål',
                    href: 'https://example.com/vitnemal',
                },
            },
        },
        {
            id: 2,
            year: 2022,
            title: 'Introduction To Computer Science with Python',
            description: 'Fullført Introduction To Computer Science with Python med gode resultater.',

            content:
            {
                isVisable: false,

                school :
                {
                    name: 'HarvardX',
                    location: 'Nettet',
                    description: 'Nettbasert kurs fra Harvard University',
                    
                    anchor:
                    {
                        type: ['external'],
                        label: 'HarvardX',
                        href: 'https://example.com/',
                    },
                },

                anchor:
                {
                    label: 'Certified Course',
                    href: 'https://example.com/vitnemal',
                },
            },
        },
        {
            id: 2,
            year: 2023,
            title: 'Introduction To Computer Science',
            description: 'Fullført Introduction To Computer Science med gode resultater.',

            content:
            {
                isVisable: false,

                school :
                {
                    name: 'HarvardX',
                    location: 'Nettet',
                    description: 'Nettbasert kurs fra Harvard University',
                    
                    anchor:
                    {
                        type: ['external'],
                        label: 'HarvardX',
                        href: 'https://example.com/',
                    },
                },

                anchor:
                {
                    label: 'Certified Course',
                    href: 'https://example.com/vitnemal',
                },
            },
        },
        {
            id: 3,
            year: 2024,
            title: 'GetAcademy',
            description: 'Fullført GetAcademy med gode resultater.',

            content:
            {
                isVisable: false,

                school :
                {
                    name: 'GetAcademy',
                    location: 'Larvik, Vestfold, Norge',
                    description: 'OnCampus / Nettbasert kurs fra GetAcademy',

                    anchor:
                    {
                        type: ['external'],
                        label: 'GetAcademy',
                        href: 'https://example.com/',
                    },
                },

                anchor:
                {
                    label: 'Vitnemål',
                    href: 'https://example.com/vitnemal',
                },
            },
        },
    ]);

    const toggleVisibility = (id) => {
        console.log('Toggling visibility for ID:', id);
        const data = timeline.find(item => item.id === id);
        if (!!data) {data.content.isVisable = !data.content.isVisable;}
    };
</script>