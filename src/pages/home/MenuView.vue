<template>
    <div class="rounded-xl p-5 bg-white flex flex-col" >
        <h1 class="text-2xl font-bold capitalize flex items-center gap-3 text-primary-800">
            <n-icon
                v-if="st_base.selected_menu === 'weather'"
                color="primary"
                size="33"
                :component="Weather"
            />
            <n-icon
                v-if="st_base.selected_menu === 'campo'"
                color="primary"
                size="33"
                :component="Plant2"
            />
            <n-icon
                v-if="st_base.selected_menu === 'crop'"
                color="primary"
                size="33"
                :component="Plant"
            />
            {{ st_base.selected_menu }}
        </h1>
        <hr class="border-primary-800 my-3">
        <div class="grow flex flex-col">
            <!-- CAMPO -->
            <div
                v-if="st_base.selected_menu === 'campo'"
            >
                <!-- name, area, coordinates, acquisition date -->
                <div class="flex flex-col gap-5">
                    <div>
                        <h2 class="text-lg font-bold mb-1">Campo:</h2>
                        <p class="text-sm text-gray-500">Area: 10.000 mq</p>
                        <p class="text-sm text-gray-500">Coordinates: 45.123456, 12.123456</p>
                        <p class="text-sm text-gray-500">Acquisition date: 01/01/2021</p>
                    </div>
                    <!-- <div>
                        <h2 class="text-lg font-bold mb-1">Campo:</h2>
                        <p class="text-sm text-gray-500">Area: 10.000 mq</p>
                        <p class="text-sm text-gray-500">Coordinates: 45.123456, 12.123456</p>
                        <p class="text-sm text-gray-500">Acquisition date: 01/01/2021</p>
                    </div> -->
                </div>  
            </div>

            <!-- CROPS SELECTED -->
            <div
                v-if="st_base.selected_menu === 'crop' && st_base.selected_crops !== ''"
                class="grow flex flex-col justify-between"
            >
                <div class="flex flex-col gap-5">
                    
                    <div>
                        <h2 class="text-lg font-bold mb-1">Crop:</h2>
                        <p class="text-sm text-gray-500">Progress: <b class="text-warning-500">50%</b></p>
                        <p class="text-sm text-gray-500">Health: <b class="text-success-800">50%</b></p>
                        <p class="text-sm text-gray-500">Expected yield: <b class="text-danger-500">1000kg</b></p>
                    </div>  
                </div> 
                
                <div>
                    <small class="block text-center text-gray-500 mb-1">Piantagione seleziona</small>
                    <div class="bg-[#167f22]/20 border-2 border-success-800 rounded py-1 w-full text-center">
                        <b class="text-success-800 capitalize text-lg">{{st_base.selected_crops}}</b>
                    </div>
                    <n-popconfirm
                        positive-text="Yes" negative-text="No, not change"
                        @positive-click="st_base.selected_crops = ''"
                    >
                        <template #trigger>
                            <small
                                class="block text-center text-danger-500 mb-1 cursor-pointer"
                            >Change crops</small>
                        </template>
                        Are you sure you want to change the selected crop?
                    </n-popconfirm>
                    
                </div>
            </div>

            <!-- CROPS UNSELECTED -->
            <div
                v-if="st_base.selected_menu === 'crop' && st_base.selected_crops === ''"
                class="grow flex flex-col justify-between"
            >
                <!-- 

                    Corn
                    Oats
                    Soybeans
                    Soybean Meal
                    Soybean Oil
                    Wheat
                 -->
                 <div>
                    <h2 class="text-lg font-bold mb-1">Select a crop:</h2>
                    <div class="grid grid-cols-3 mt-3 gap-3">
                        <div
                            v-for="crop in ['corn', 'oats', 'soybeans', 'soybean meal', 'soybean oil', 'wheat']"
                            :key="crop"
                            class="bg-[#167f22]/20 hover:bg-[#167f22]/30 border-2 border-success-800 rounded py-1 text-center transition-base cursor-pointer"
                            @click="st_base.selected_crops = crop"
                        >
                            <b class="text-success-800 capitalize">{{crop}}</b>
                        </div>
                    </div>
                </div>
                    
                
            </div>
            
        </div>
    </div>
</template>

<script setup>
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
} from "@vicons/tabler";
import {
    OverflowMenuHorizontal as Menu,
} from "@vicons/carbon";

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

</script>

<style lang="scss" scoped>

$brown: #bf8c6c;

// .inner-border {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
// }

// .outer-border {
// 	border: 2px solid $brown;
//    	height: 99%;
//     width: 98%;
//     padding: 6px;
//     margin: 0 auto;
//     box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
// }

// @media (min-width: 992px) {
// 	.outer-border {
// 		height: 94%;
// 	}
// }

// .mid-border {
//     border: 6px solid $brown;
//     height: 100%;
//     width: 100%;
//     padding: 6px;
//     margin: auto;
//     box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.25);
// }

// .inner-border {
// 	position: relative;
// 	border: 2px solid $brown;
//     height: 100%;
//     width: 100%;
//     margin: auto;
//     box-shadow: inset 2px 2px 5px 0px rgba(0,0,0,0.25);
// }
</style>