<template>
    <div class="flex flex-col justify-between">
        <div class="relative ">
            <img class="h-[75px] w-[75px] border-[2px] border-green-700 rounded-full ml-5 relative z-[2] shadow-md" :src="avatar" alt="">
            <div class="absolute top-[25px] left-5 -translate-y-1/2 z-[1] ml-6 pl-[60px] py-2 bg-white border-[2px] border-green-700 w-[160px] shadow-md rounded-lg">
                <b>Krab Lucci</b>
            </div>
            <div class="absolute bottom-[2px] left-12 py-1 px-3 pt-2 pb-[3px] w-[140px] whitespace-nowrap bg-warning-500 text-white" style="border-radius: 0 0 10px 0">
                <b class="pl-[45px] block">150.00$</b>
            </div>
        </div>
        <div class="flex flex-col  pl-[10px]">

            <!-- HOME -->
            <div
                class="relative cursor-pointer mb-5"
                @click="st_base.selected_menu = ['campo', 'crop'].includes(st_base.selected_menu) ? '' : 'campo'"
            >
                <div class="relative z-[2] flex justify-center items-center h-[40px] w-[40px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                    <n-icon
                        size="20"
                        color="green"
                        :component="Home"
                    />
                </div>
                <div
                    class="label-menu absolute left-8 top-1/2 -translate-y-1/2 z-[1] rounded-md px-3 py-[2px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700"
                    :class="['campo', 'crop'].includes(st_base.selected_menu) ? 'bg-green-700 text-white' : 'text-green-700'"
                >
                    <small><b>Home</b></small>
                </div>
            </div>

            <n-collapse-transition
                class="min-w-[300px]"
                width="300px"
                :show="['campo', 'crop'].includes(st_base.selected_menu) ? true : false"
            >
                <!-- Campo -->
                <div
                    class="relative cursor-pointer mb-5 ml-5"
                    @click="st_base.selected_menu = 'campo'"
                >
                    <div class="relative z-[2] flex justify-center items-center h-[30px] w-[30px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                        <n-icon
                            size="15"
                            color="green"
                            :component="Plant2"
                        />
                    </div>
                    <div
                        class="label-menu absolute left-5 top-1/2 -translate-y-1/2 z-[1] px-3 py-[0px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700 rounded-md"
                        :class="st_base.selected_menu === 'campo' ? 'bg-green-700 text-white' : 'text-green-700'"
                    >
                        <small><b>Campo</b></small>
                    </div>
                </div>

                <!-- Campo -->
                <div
                    class="relative cursor-pointer mb-5 ml-5"
                    @click="st_base.selected_menu = 'crop'"
                >
                    <div class="relative z-[2] flex justify-center items-center h-[30px] w-[30px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                        <n-icon
                            size="15"
                            color="green"
                            :component="Plant"
                        />
                    </div>
                    <div
                        class="label-menu absolute left-5 top-1/2 -translate-y-1/2 z-[1] px-3 py-[0px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700 rounded-md"
                        :class="st_base.selected_menu === 'crop' ? 'bg-green-700 text-white' : 'text-green-700'"
                    >
                        <small><b>Crop</b></small>
                    </div>
                </div>
            </n-collapse-transition>
            

            <!-- ALTRO -->
            <div
                class="relative cursor-pointer mb-5"
                @click="st_base.selected_menu = ['weather', 'bho'].includes(st_base.selected_menu) ? '' : 'weather'"
            >
                <div class="relative z-[2] flex justify-center items-center h-[40px] w-[40px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                    <n-icon
                        size="20"
                        color="green"
                        :component="Info"
                    />
                </div>
                <div
                    class="label-menu absolute left-8 top-1/2 -translate-y-1/2 rounded-md z-[1] px-3 py-[2px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700"
                    :class="['weather', 'bho'].includes(st_base.selected_menu) ? 'bg-green-700 text-white' : 'text-green-700'"
                >
                    <small><b>Info</b></small>
                </div>
            </div>

            <n-collapse-transition
                class="min-w-[300px]"
                width="300px"
                :show="['weather', 'bho'].includes(st_base.selected_menu) ? true : false"
            >
                <!-- Campo -->
                <div
                    class="relative cursor-pointer mb-5 ml-5"
                    @click="st_base.selected_menu = 'weather'"
                >
                    <div class="relative z-[2] flex justify-center items-center h-[30px] w-[30px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                        <n-icon
                            size="15"
                            color="green"
                            :component="Weather"
                        />
                    </div>
                    <div
                        class="label-menu absolute left-5 top-1/2 -translate-y-1/2 z-[1] px-3 py-[0px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700 rounded-md"
                        :class="st_base.selected_menu === 'weather' ? 'bg-green-700 text-white' : 'text-green-700'"
                    >
                        <small><b>Weather</b></small>
                    </div>
                </div>

                <!-- Campo -->
                <div
                    class="relative cursor-pointer mb-5 ml-5"
                    @click="st_base.selected_menu = 'bho'"
                >
                    <div class="relative z-[2] flex justify-center items-center h-[30px] w-[30px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                        <n-icon
                            size="15"
                            color="green"
                            :component="Plant"
                        />
                    </div>
                    <div
                        class="label-menu absolute left-5 top-1/2 -translate-y-1/2 z-[1] px-3 py-[0px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700 rounded-md"
                        :class="st_base.selected_menu === 'bho' ? 'bg-green-700 text-white' : 'text-green-700'"
                    >
                        <small><b>Bho</b></small>
                    </div>
                </div>
            </n-collapse-transition>
            
        </div>
        <div
            class="relative cursor-pointer mb-5"
            @click="st_base.selected_menu = ['weather', 'bho'].includes(st_base.selected_menu) ? '' : 'weather'"
        >
            <div class="relative z-[2] flex justify-center items-center h-[40px] w-[40px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                <n-icon
                    size="20"
                    color="green"
                    :component="Info"
                />
            </div>
            <div
                class="label-menu absolute left-8 top-1/2 -translate-y-1/2 rounded-md z-[1] px-3 py-[2px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700"
                :class="['weather', 'bho'].includes(st_base.selected_menu) ? 'bg-green-700 text-white' : 'text-green-700'"
            >
                <small><b>Info</b></small>
            </div>
        </div>
    </div>
</template>

<script setup>

import avatar from "@/assets/imgs/avatar.jpeg";

import {
    Home,
} from "@vicons/fa";
import {
    Info12Regular as Info,
    WeatherCloudy24Regular as Weather
} from "@vicons/fluent";
import {
    Plant,
    Plant2,
} from "@vicons/tabler";

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

let selected = ref("");

</script>

<style lang="scss" scoped>

</style>