<template>
    <div class="rounded-xl p-5 bg-white flex flex-col shadow-xl">
        <img
            class="absolute top-0 left-0 w-full h-full object-cover rounded-xl z-[-1] opacity-60"
            src="https://i.pinimg.com/736x/07/50/6e/07506ec09f4030350e950063f0d570a3.jpg"
            alt=""
        >
        <a
            class="absolute top-0 right-[5px] -translate-y-full text-white font-bold cursor-pointer"
            @click="st_base.selected_menu = '';st_base.partial_selected_crops = ''"
        >CLOSE</a>
        <h1 class="text-2xl font-bold capitalize flex items-center gap-3 text-primary-800">
            <n-icon
                v-if="st_base.selected_menu === 'weather'"
                color="primary"
                size="33"
                :component="Weather"
            />
            <n-icon
                v-if="st_base.selected_menu === 'field'"
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
                v-if="st_base.selected_menu === 'field'"
            >
                <!-- name, area, coordinates, acquisition date -->
                <div class="flex flex-col gap-5">
                    <div>
                        <h2 class="text-lg font-bold mb-1">Field:</h2>
                        <p class="text-sm text-gray-500">Area: 10.000 mq</p>
                        <p class="text-sm text-gray-500">Coordinates: 45.123456, 12.123456</p>
                        <p class="text-sm text-gray-500">Acquisition date: 01/01/2021</p>
                    </div>
                </div>  
            </div>
            <!-- CAMPO -->
            <div
                v-if="st_base.selected_menu === 'weather'"
            >
                <!-- name, area, coordinates, acquisition date -->
                <div class="flex flex-col h-[80vh]  gap-5">
                    <div>
                        <n-date-picker
                            v-model:value="range"
                            type="daterange"
                            :is-date-disabled="disabledDate"
                            clearable
                        />
                    </div>
                    <div class="grow flex flex-col gap-3 overflow-y-auto wide-scrollbar">
                            <div v-if="loading === false" class="flex flex-col gap-3">
                                <div
                                    v-for="el in filet_info"
                                    :key="el.label"
                                    class="bg-[#167f22]/20 border-2 flex justify-between border-success-800 rounded py-1 w-full px-3"
                                >
                                    <p class="text-sm text-success-800">{{el.label}}</p>
                                    <b class="text-success-800">{{el.value}}</b>
                                </div>
                            </div>
                            <div v-if="filet_info.length === 0 && loading == false" class="text-center text-gray-500 mt-10">
                                No data available
                            </div>
                            <div v-if="loading === true" class="text-center text-gray-500 mt-10">
                                loading
                            </div>
                    </div>
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
                        <p class="text-sm text-gray-500">Progress: <b class="">50%</b></p>
                        <p class="text-sm text-gray-500">Health: <b class="">50%</b></p>
                        <p class="text-sm text-gray-500">Expected yield: <b class="">1000kg</b></p>
                    </div>  
                </div> 
                
                <div>
                    <small class="block text-center text-gray-500 mb-1">Plantation select</small>
                    <div class="bg-[#167f22]/20 border-2 border-success-800 rounded py-1 w-full text-center">
                        <b class="text-success-800 capitalize text-lg">{{st_base.selected_crops}}</b>
                    </div>
                    <n-popconfirm
                        positive-text="Yes" negative-text="No"
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

                 <div>
                    <h2 class="text-lg font-bold mb-1">Select a crop:</h2>
                    <div class="grid grid-cols-3 mt-3 gap-3">
                        <div
                            v-for="crop in ['corn', 'oats', 'soybeans', 'soybean meal', 'soybean oil', 'wheat']"
                            :key="crop"
                            class="bg-[#167f22]/20 hover:bg-[#167f22]/30 border-2 border-success-800 rounded py-1 text-center transition-base cursor-pointer"
                            @click="st_base.partial_selected_crops = crop"
                        >
                            <b class="text-success-800 capitalize">{{crop}}</b>
                        </div>
                    </div>

                    <n-collapse-transition
                        class="min-w-[300px]"
                        width="300px"
                        :show="st_base.partial_selected_crops !== ''"
                    >

                        <div class=" flex flex-col gap-4">
                            <hr class="border-primary-800 mt-5">
                            <h2 class="text-lg font-bold mb-1">Information about <b class="text-warning-600">{{st_base.partial_selected_crops}}</b></h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestiae deserunt? Quam, aliquid eveniet doloribus alias, voluptas possimus accusamus porro ad minus sed repudiandae optio quis recusandae laboriosam non fugit?
                            </p>
                            <ul>
                                <li><b>Price:</b> 100$</li>
                                <li><b>Yield:</b> 1000kg</li>
                                <li><b>Risk:</b> 50%</li>
                            </ul>
                            <n-popconfirm
                                positive-text="Yes" negative-text="No"
                                @positive-click="() => {
                                    st_base.selected_crops = st_base.partial_selected_crops
                                    st_base.money = st_base.money - 100
                                    st_base.partial_selected_crops = ''
                                }"
                            >
                                <template #trigger>
                                    <button
                                        class="bg-success-800 text-white py-1 px-3 rounded-md"
                                    >Select <b>{{st_base.partial_selected_crops}}</b></button>
                                </template>
                                Are you sure you want to select <b class="ml-1 text-success-700"> {{" "+st_base.partial_selected_crops}}</b>?
                            </n-popconfirm>

                        </div>

                    </n-collapse-transition>

                </div>
                    
                
            </div>
            
        </div>
    </div>
</template>

<script setup>
import api from "@/services/baseApiService.js"
import { componeString } from "@/utils/main.js";
import moment from "moment";
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

let range = ref(null)
let loading = ref(false)


let info = ref([
    {
        label: "Temperature Air (C)",
        key: "TempAir_Hourly (C)",
        value: ""
    },
    {
        label: "Temperature Air Surface (C)",
        key: "TempAirSurface_Hourly(C)",
        value: ""
    },
    {
        label: "Dewpoint (C)",
        key: "Dewpoint_Hourly (C)",
        value: ""
    },
    {
        label: "Humidity Rel (pct)",
        key: "HumidityRel_Hourly (pct)",
        value: ""
    },
    {
        label: "Sunshine Duration (min)",
        key: "SunshineDuration_Hourly (min)",
        value: ""
    },
    {
        label: "Cloudcover (pct)",
        key: "Cloudcover_Hourly (pct)",
        value: ""
    },
    {
        label: "Wind Speed (m/s)",
        key: "WindSpeed_Hourly (m/s)",
        value: ""
    },
    {
        label: "Wind Direction (Deg)",
        key: "WindDirection_Hourly (Deg)",
        value: ""
    },
    {
        label: "Wind Direction",
        key: "WindDirection_Hourly",
        value: ""
    },
    {
        label: "Wind Gust (m/s)",
        key: "WindGust_Hourly (m/s)",
        value: ""
    },
    {
        label: "Precip Probability (pct)",
        key: "PrecipProbability_Hourly (pct)",
        value: ""
    },
    {
        label: "Precip Sum (mm)",
        key: "Precip_HourlySum (mm)",
        value: ""
    },
    {
        label: "Shower Probability (pct)",
        key: "ShowerProbability_Hourly (pct)",
        value: ""
    },
    {
        label: "Thunderstorm Probability (pct)",
        key: "ThunderstormProbability_Hourly (pct)",
        value: ""
    },
    {
        label: "Airpressure (hPa)",
        key: "Airpressure_Hourly (hPa)",
        value: ""
    },
    {
        label: "Visibility (m)",
        key: "Visibility_Hourly (m)",
        value: ""
    },
    {
        label: "Global Radiation Sum (Wh/m2)",
        key: "GlobalRadiation_HourlySum (Wh/m2)",
        value: ""
    },
])

let filet_info = computed(() => {
    return info.value.filter(el => el.value !== "")
})

watch(() => st_base.selected_menu, (newVal) => {
    if(newVal !== "weather") {
        // reset all
        range.value = null
        info.value = info.value.map(el => {
            el.value = ""
            return el
        })

    }
})

watch(range, (newVal, oldVal) => {

    if(newVal === null) {
        info.value = info.value.map(el => {
            el.value = ""
            return el
        })
        return
    }

    loading.value = true
    
    let string = componeString({
        latitude:-55,
        longitude:-15,
        startDate: moment(newVal[0]).format('YYYY-MM-DD'),
        endDate: moment(newVal[1]).format('YYYY-MM-DD'),
        supplier:'Meteoblue',
        top:20,
        format:'json'
    })

    api.server_fetch("forecast", {}, { string: string })
    .then(res => {
        console.log(res)

        info.value = info.value.map(el => {
            let value = res.find(r => r.measureLabel === el.key)
            if(value) el.value = value.value
            return el
        })

        loading.value = false

    })

})

// disabilita precedenti a oggi e future a 7 giorni
function disabledDate(time) {

    let today = new Date()
    let sevenDays = new Date()
    sevenDays.setDate(today.getDate() + 7)

    return time < today.getTime() || time > sevenDays.getTime()

}

onMounted(() => {
    
    

})

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