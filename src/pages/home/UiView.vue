<template>
    <div class="flex flex-col justify-between">
        <div class="relative ">
            <img class="h-[75px] w-[75px] border-[2px] border-green-700 rounded-full relative z-[2] shadow-md" :src="avatar" alt="">
            <div class="absolute top-[25px] left-5 -translate-y-1/2 z-[1] ml-2 pl-[60px] py-2 bg-white border-[2px] border-green-700 w-[200px] shadow-md rounded-lg">
                <b>Crab Lucci </b>
            </div>
            <div class="absolute bottom-[2px] left-12 py-1 px-3 pt-2 pb-[3px] w-[140px] whitespace-nowrap bg-warning-500 text-white" style="border-radius: 0 0 10px 0">
                <b class="pl-[30px] block">
                    <n-number-animation
                        ref="numberAnimationInstRef"
                        :from="from"
                        :to="to"
                        :active="true"
                    />.00€
                </b>
            </div>
        </div>
        <div class="flex flex-col">

            <!-- HOME -->
            <div
                class="relative cursor-pointer mb-5"
                @click="st_base.selected_menu = ['field', 'crop'].includes(st_base.selected_menu) ? '' : 'field'"
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
                    :class="['field', 'crop'].includes(st_base.selected_menu) ? 'bg-green-700 text-white' : 'text-green-700'"
                >
                    <small><b>Home</b></small>
                </div>
            </div>

            <n-collapse-transition
                class="min-w-[300px]"
                width="300px"
                :show="['field', 'crop'].includes(st_base.selected_menu) ? true : false"
            >
                <!-- Campo -->
                <div
                    class="relative cursor-pointer mb-5 ml-5"
                    @click="st_base.selected_menu = 'field'"
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
                        :class="st_base.selected_menu === 'field' ? 'bg-green-700 text-white' : 'text-green-700'"
                    >
                        <small><b>Field</b></small>
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
                            :component="Menu"
                        />
                    </div>
                    <div
                        class="label-menu absolute left-5 top-1/2 -translate-y-1/2 z-[1] px-3 py-[0px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700 rounded-md"
                        :class="st_base.selected_menu === 'bho' ? 'bg-green-700 text-white' : 'text-green-700'"
                    >
                        <small><b>Other</b></small>
                    </div>
                </div>
            </n-collapse-transition>
            
        </div>
        <div class="flex flex-col gap-2">
            <div
                class="relative cursor-pointer"
            >
                <div class="relative z-[2] flex justify-center items-center h-[40px] w-[40px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                    <n-icon
                        size="20"
                        color="green"
                        :component="Boat"
                    />
                </div>
                <div
                    class="label-menu absolute left-8 top-1/2 -translate-y-1/2 rounded-md z-[1] px-3 py-[2px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700"
                    @click="showModal = true"
                    @mouseenter="text = 'Time to abbandon ship'"
                    @mouseleave="text = 'Under construction'"
                >
                    <small>
                        <b>{{ text }}</b>
                    </small>
                </div>
            </div>
            <div
                class="relative cursor-pointer"
                @click="modal_message = true"
            >
                <div class="relative z-[2] flex justify-center items-center h-[40px] w-[40px] border-[2px] border-green-700 rounded-full bg-[white]/100">
                    <n-badge :offset="[-2,4]" :dot="st_base.selected_crops == ''">
                        <n-icon
                            size="20"
                            color="green"
                            :component="Message"
                        />
                    </n-badge>
                </div>
                <div class="label-menu absolute left-8 top-1/2 -translate-y-1/2 rounded-md z-[1] px-3 py-[2px] bg-[white]/90 whitespace-nowrap border-[2px] border-green-700">
                    <small><b>Message</b></small>
                </div>
            </div>
        </div>
        <n-modal
            v-model:show="showModal"
        >
            <n-card
                class="container !bg-white px-0"
            >
                <video
                    :src="time"
                    class="!w-full"
                    muted autoplay loop
                ></video>
            </n-card>
        </n-modal>
        <ModalMessage
            :modal="modal_message"
            @editModal="modal_message = $event"
        />
    </div>
</template>

<script setup>

import ModalMessage from "./components/ModalMessage.vue";

import avatar from "@/assets/imgs/avatar.jpeg";
import time from "@/assets/video/video.mp4";

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
    Speedboat as Boat,
    Message
} from "@vicons/tabler";
import {
    OverflowMenuHorizontal as Menu,
} from "@vicons/carbon";

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

let modal_message = ref(false)

import { ref, watch } from "vue"

let selected = ref("");
let text = ref("Under construction");
let showModal = ref(false)
let from = ref(st_base.money)
let to = ref(st_base.money)
let numberAnimationInstRef = ref(null)

watch(() => st_base.money, async (newVal, oldVal) => {
    from.value = oldVal
    to.value = newVal
    numberAnimationInstRef.value?.start()
})

</script>

<style lang="scss" scoped>

</style>