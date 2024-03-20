<template>
    <div class="my-[7rem]"> 
        <div class="container">
            <h1 class="text-7xl md:text-9xl font-bold text-center text-primary dark:text-secondary">
                HOME
            </h1>

            <div class="my-[4rem] md:my-[7rem]">
                <div class="flex gap-5">
                    <div class="grid md:grid-cols-3 gap-[2rem] md:gap-[4rem] bg-background p-5">
                        <div
                            v-for="i in 9" :key="i"
                            class="bg-background-100 p-5"
                        >
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta accusantium suscipit voluptatibus unde. Laudantium soluta dolor exercitationem porro voluptatum mollitia perspiciatis saepe quis illum est beatae tenetur, eius ea maxime.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta accusantium suscipit voluptatibus unde. Laudantium soluta dolor exercitationem porro voluptatum mollitia perspiciatis saepe quis illum est beatae tenetur, eius ea maxime.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta accusantium suscipit voluptatibus unde. Laudantium soluta dolor exercitationem porro voluptatum mollitia perspiciatis saepe quis illum est beatae tenetur, eius ea maxime.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import { onMounted } from 'vue'

import gsap from 'gsap'

onMounted(() => {
    gsap.from('h1', {
        opacity: 0,
        y: 100,

        duration: 1,
        ease: 'power4.out'
    })
})

</script>
