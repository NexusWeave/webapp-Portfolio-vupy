<template>
    <section class="flex-wrap-row-align-items-center">
        <section>
            <NavigationNavMenu :data="data.logo" :cls="['logo-bar', 'logo-list', 'logo-item']" toggle="anchor" />
        </section>
        <NavigationNavMenu :data="data.menu" toggle="router"/>
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

    const data =
    {
        title:
        [
            'Logic', 'Meets',
            'Creative', 'Solutions',
        ],
        logo: 
        {
            anchor:
            {
                href: '/',
                cls: ['nav-link-logo'],
                
                img:
                {
                    type: 'png',
                    cls: ['k-logo-img'],
                    alt: 'logic-meets-creative-solutions.png',
                    src: '/media/images/logo/logic-meets-creative-solutions.png',
                }
            },
            
            
        },
        menu:
        [
            {
                href: '/',
                label: 'Kristoffer Gjøsund',
            },

            {
                href: '/dev',
                label: 'Dev Profile',
            },
            {
                href: '/folio',
                label: 'Portefølje',
            },
        ]
    }
</script>