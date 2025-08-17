<template>
    <template v-if="portofolio.data">
        <section id="fullstack"  class="flex-wrap-column">
        <h2>Technical Repositories</h2>
        
        <section class="flex-wrap-column-align-items-center">
            <Pagination class='flex-wrap-row-justify-space-evenly tech-bar':data="portofolio.data.Total" @update="portofolio.current = $event" v-if="portofolio.data.Total"/>
        </section>

        <section id="technologies" class="tech-repo flex-wrap-row-justify-center">
            <div class="flex-wrap-row" v-for="data in portofolio.displayData" :key="data.id">
                <div class="tech-container flex-wrap-column  ">
                    <div v-for="lang in data.lang" :key="lang.id" class="img-wrapper flex-wrap-row-justify-space-between relative">
                        <img class="img-svg" :src="'./src/assets/img/techlogo/' + lang.lang + '.svg'" :alt="lang.lang + '.svg'" />
                        <span class="time">
                            <time v-bind:datetime="data.date">{{ data.date }}</time>
                        </span>
                    </div>
                    <h3 v-if="Array.isArray(data.name)">{{ data.name[1] }}</h3>
                    <h3 v-else>{{ data.name }}</h3>
                    <p>{{ data.description }}</p>
                    <nav class="pro-nav flex-wrap-row-justify-space-evenly">
                        <Link :link="url" v-for="url in data.links"/>

                    </nav>
                </div>
            </div>
        </section>

    </section>
    </template>

    <template v-else>
        <section id="fullstack" class="loading">
            <p>Loading Technical Repositories...</p>
        </section>
    </template>
</template>

<script setup>

    //  Importing dependencies
    import { reactive, onMounted, computed } from 'vue';
    import { FetchApiResponse } from '../utils/apiHandler.js';

    //  Importing components
    import Form from '@/components/form/Form.vue';
    import Link from '@/components/navigation/Anchor.vue';
    
    import Pagination from '@/components/navigation/Pagination.vue';


    //  Initializing reactive objects
    const portofolio = reactive(
    {
        n           : 9,
        current     : 1,
        data        : null,
        
        btn   :[
            {
                id: 1,
                name: 'Next',
                cls: 'tech-btn'
            },
            {
                id: 2,
                name: 'Prev',
                cls: 'tech-btn'
            }
        ],
        
        displayData :computed(() =>
        {
            if (filter.name)
            {
                return portofolio.data.filter((data) => {
                    filterData (data.name, filter.name.toLowerCase());
                });
            }
            else
            {
                const end = (portofolio.current * portofolio.n);
                const start = (portofolio.current-1) * portofolio.n;

                let data =  portofolio.data.slice(start, end);

                for (let i = 0; i< data.length; i++)
                {
                    if (data[i].name.includes('-'))
                    {
                        data[i].name = data[i].name.split('-');
                    }
                }
                return data;
            }
        })
    });


    const filter = reactive(
    {
        name: '',
        lang: '',
        category: ''
    });

    function filterData (name, filter)
    {
        for (let i = 0; i< name.length; i++)
        {
            if (name[i].includes(filter).toLowerCase())
            {
                return name[i];
            }
        }
    }

    //  Fetching data from the server
    onMounted(
        async () => {
            try {
            const response = await FetchApiResponse(import.meta.env.VITE_Github_local);

            portofolio.data = response.data;
            portofolio.data.Total = response.Total;

            console.log("Pfolio API Response :", portofolio.data);
        }

            catch (error){console.error("Error fetching announcements :", error);}
        });

    //  Fetching the data from the server
</script>