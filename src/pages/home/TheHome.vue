<template>
    <div class="max-w-[100vw] !overflow-x-hidden">
        <div class="grid grid-cols-12 max-w-[100vw] !overflow-x-hidden">
    
            <div class="col-span-12">
                <img class="h-screen w-full object-cover" :src="st_base.field_id == 1 ? map : cave" alt="">
                <div
                    class="absolute -translate-x-1/2 -translate-y-1/2"
                    :style="{
                        top: st_base.field_id == 1 ? '50%' : '50%',
                        left: st_base.field_id == 1 ? '50%' : '45%'
                    }"
                >
                    <div
                        v-if="st_base.selected_crops !== ''"
                        class="relative h-[200px] w-[420px] "
                    >
                        <div
                            v-for="(icon, index) in icons"
                            :key="index"
                            :style="{ top: `${icon.top}`, left: `${icon.left}` }"
                            class="absolute -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer hover:scale-110 transition-base"
                            @click="st_base.selected_menu = 'crop'"
                        >
                            <n-icon
                                size="60"
                                color="white"
                                :component="Plant2"
                            />
                            <div class="-mt-1 text-center text-white py-[2px] px-4 border-[3px] font-bold text-xl uppercase rounded-full">
                                {{ st_base.selected_crops }}
                            </div>
                        </div>
                        
                    </div>
                    <div
                        v-else
                        class="relative h-[200px] w-[420px] "
                    >
                        <div
                            class="absolute -translate-x-1/2 -translate-y-[50px] text-center cursor-pointer hover:scale-110 transition-base top-1/2 left-1/2"
                            @click="st_base.selected_menu = 'crop'"
                        >
                            <n-icon
                                size="60"
                                color="white"
                                :component="SnoozeRound"
                            />
                        </div>
                    </div>
                </div>


            </div>
            <div class="max-w-[100vw] !overflow-x-hidden">

                <MenuView
                    class="absolute top-10 right-10 bottom-10 w-[400px] transition-base"
                    :class="st_base.selected_menu === '' ? 'translate-x-[500px]' : 'translate-x-0'"
                />
            </div>
            <UiView class="absolute top-10 left-10 bottom-10" />
    
            <div
                class="absolute bottom-10 top-10 mb-5 flex flex-col justify-between transition-base"
                :class="st_base.selected_menu === '' ? 'right-[40px]' : 'right-[480px]'"
            >
    
                <div class="relative">
                    <div class="relative z-[2] overflow-hidden flex justify-center items-center h-[60px] w-[60px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                        <b class="text-2xl text-primary-700">1°</b>
                    </div>
                    <div
                        class="label-menu absolute right-8 top-1/2 -translate-y-1/2 z-[1] rounded-md px-5 pr-10 py-[5px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700"
                    >
                        <b>Crop's King</b>
                    </div>
                </div>
                <div class="relative">
                    <div class="relative z-[2] overflow-hidden flex justify-center items-center h-[40px] w-[40px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                        <img
                            src="data:image/png;base64,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" alt=""
                            class="h-full w-full object-cover"
                        >
                    </div>
                    <n-popselect
                        v-model:value="st_base.field_id"
                        :options="[
                            {
                                value: 1,
                                label: 'Campo Borti'
                            },
                            {
                                value: 2,
                                label: 'Hackaton Field'
                            }
                        ]"
                    >
                        <div
                            class="label-menu absolute right-8 top-1/2 -translate-y-1/2 z-[1] rounded-md px-3 pr-4 py-[2px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700"
                        >
                            <small class="block pr-5"><b>{{ st_base.field_id === 1 ? 'Campo Borti' : 'Hackaton Field' }}</b></small>
                        </div>
                    </n-popselect>
                </div>
            </div>
            <!-- HOME -->
    
    
        </div>
    </div>
</template>

<script setup>
import {
    Plant2,
} from "@vicons/tabler";
import {
    SnoozeRound,
} from "@vicons/material";

import map from "@/assets/imgs/map.png";
import cave from "@/assets/imgs/cave.png";
import frame from "@/assets/imgs/frame.png";

import EarthView from "./EarthView.vue";
import MenuView from "./MenuView.vue";
import UiView from "./UiView.vue";

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

let icons = ref([
    {top: '40%', left: '50%', size: 70},
    // {top: 10, left: 10},
    // {top: 10, left: 60},
    // {top: 10, left: 110},
    // {top: 10, left: 160},
    // {top: 10, left: 210},
    // {top: 10, left: 260},
    // {top: 10, left: 310},
    // {top: 10, left: 360},
    // {top: 10, left: 410},
    // {top: 10, left: 460},
    // {top: 60, left: 10},
    // {top: 60, left: 60},
    // {top: 60, left: 110},
    // {top: 60, left: 160},
    // {top: 60, left: 210},
    // {top: 60, left: 260},
    // {top: 60, left: 310},
    // {top: 60, left: 360},
    // {top: 60, left: 410},
    // {top: 110, left: 10},
    // {top: 110, left: 60},
    // {top: 110, left: 110},
    // {top: 110, left: 160},
    // {top: 110, left: 210},
    // {top: 110, left: 260},
    // {top: 110, left: 310},
    // {top: 110, left: 360},

])

watch(() => st_base.field_id, (newValue, oldValue) => {
    let old = st_base.fields.find((field) => field.id === oldValue)
    old.selected_crops = st_base.selected_crops
    st_base.selected_crops = ''
    let newField = st_base.fields.find((field) => field.id === newValue)
    st_base.selected_crops = newField.selected_crops
    st_base.selected_menu = ''
})



</script>

<style lang="scss" scoped>

</style>