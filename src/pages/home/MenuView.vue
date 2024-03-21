<template>
    <div class="rounded-xl p-5">
        <h1 class="text-2xl font-bold">Menu</h1>
        <div class="mt-5">
            {{ st_base.selected_menu }}
        </div>
    </div>
</template>

<script setup>

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

</script>

<style lang="scss" scoped>

</style>