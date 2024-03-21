<template>
    <n-modal
        
        v-model:show="showModal"
    >
        <n-card
            class="container !bg-white px-0 !relative"
        >
            <img
                class="absolute top-0 left-0 w-full h-full object-cover rounded-xl z-[1] opacity-60"
                src="https://i.pinimg.com/736x/07/50/6e/07506ec09f4030350e950063f0d570a3.jpg"
                alt=""
            >
            <div class="relative z-[2]"> 

                <h1 class="text-2xl font-bold capitalize flex items-center gap-3 text-primary-800">
                    <n-icon
                        color="primary"
                        size="33"
                        :component="Message"
                    />
                    Message
                </h1>
                <hr class="border-primary-800 my-5">
                <div
                    v-if="messages.length"
                    class="flex flex-col gap-5"
                >
                    <div
                        v-for="(item,index) in messages"
                        :key="index"
                        class="relative"
                    >
                        <h5 class="font-semibold absolute top-0 right-0 text-gray-900">{{ item.data }}</h5>
                        <h2 class="text-lg font-bold mb-1">{{ item.title }}:</h2>
                        <p class="text-sm text-gray-500">
                            Congratulations! You have reached level 20. You have gained access to a wider variety of seeds, many of which require specific knowledge of the climate and your soil in order to yield the best harvest. Keep farming!
                        </p>
                        <hr class="border-primary-700 my-4">
                    </div>
                </div>  
                <div v-else class="my-4" >
                    <p class=" text-gray-500 text-center font-bold uppercase text-lg">
                        No messages
                    </p>
                </div>
            </div>
        </n-card>
    </n-modal>
</template>

<script setup>

import {
    Message,
} from "@vicons/tabler";

let props = defineProps({
    modal: Boolean,
})

let emit = defineEmits(['editModal'])

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

let messages = computed(() => {
    let _messages = []
    if (st_base.selected_crops == '') {
        _messages.push({
            title: 'New crops unlocked!',
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum exercitationem vero sit, quae similique cumque porro obcaecati necessitatibus ad sapiente libero soluta vel a consequuntur laboriosam ducimus, repudiandae dicta animi?',
            data: '2024-03-21'
        })
    }
    return _messages
})



let showModal = computed({
    get: () => props.modal,
    set: (value) => {
        emit('editModal', value)

    }
})

</script>

<style lang="scss" scoped>

</style>