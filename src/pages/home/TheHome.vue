<template>
    <div class="grid grid-cols-12">

        <div class="col-span-12">
            <img class="h-screen object-cover" :src="map">
        </div>
        <MenuView
            class="absolute top-10 right-10 bottom-10 bg-white w-[400px] transition-base"
            :class="st_base.selected_menu === '' ? 'translate-x-[500px]' : 'translate-x-0'"
        />
        <UiView class="absolute top-10 left-0 bottom-10" />


    </div>
</template>

<script setup>
import map from "@/assets/imgs/map.png";
import frame from "@/assets/imgs/frame.png";

import EarthView from "./EarthView.vue";
import MenuView from "./MenuView.vue";
import UiView from "./UiView.vue";

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()
</script>

<style lang="scss" scoped>

</style>