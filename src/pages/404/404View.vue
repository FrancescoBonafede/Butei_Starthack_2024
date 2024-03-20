<template>
    <div class="grow flex flex-col justify-center">
        <div class="container">
            <h1 class="text-9xl font-bold">
                404
                <br>
                Page not found
            </h1>
            <hr class="my-5">
            <p class="text-xl">
                La pagina <b class="text-primary">{{ currentRoute }}</b> non è stata trovata
            </p>
        </div>
    </div>
</template>

<script setup>
// ROUTER ----------------------------------------
import { useRoute } from "vue-router"
const route = useRoute()

let currentRoute = computed(() => {
    return window.location
})

</script>

<style lang="scss" scoped>

</style>