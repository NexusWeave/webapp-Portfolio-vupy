<template>
    <section class="flex-wrap-row">
        <section>
            <NavMenu :data="data.logo.menu" :cls="['logo-bar', 'logo-list', 'logo-item']" />
        </section>
        <NavMenu :data="data.menu" />
    </section>
    <section class="slogan-wrapper">
            <h1>
                <span v-for="text in data.title" :key="text">
                    {{ text }}
                </span>
            </h1>
        
        </section>
    

</template>

<script setup>

import NavMenu from '@/components/navigation/NavMenu.vue';

const data =
{
    title:
    [
        'Logic', 'Meets',
        'Creative', 'Solutions',
    ],
    logo: {
        menu:
        [
            {
                type: 'anchor',
                anchor:
                {
                    href: '/',
                    img:{
                        type: 'png',
                        cls: ['k-logo-img'],
                        alt: 'logic-meets-creative-solutions.png',
                        src: '/media/images/logo/logic-meets-creative-solutions.png',
                    }
                }
            },
        ]
    },
    menu:
    [
        {
            href: '/',
            type: 'router',
            label: 'Portefølje',
        },
        {
            href: '/about',
            type: 'router',
            label: 'About',
        },
        {
            href: '/dev',
            type: 'router',
            label: 'Dev profile',
        }
    ]
}
</script>