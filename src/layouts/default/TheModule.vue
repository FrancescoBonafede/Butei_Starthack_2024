<template>
<div class="min-h-screen flex flex-col">
	<HeaderBar />
	<!-- <HeaderBar />
	<BottomBar /> -->
	<div class="grow flex flex-col">
		<router-view class="block h-full" v-slot="{ Component }">
			<Transition name="fade" mode="out-in">
				<component class="h-full" :is="Component" />
			</Transition>
		</router-view>
	</div>
	<FooterMenu />
</div>
</template>

<script setup >

import HeaderBar from "./sections/HeaderBar.vue"
import BottomBar from "./sections/BottomBar.vue"
import FooterMenu from "./sections/FooterMenu.vue"

import { useMessage } from 'naive-ui'
import { useNotification } from 'naive-ui'
import { useDialog } from 'naive-ui'

import { onMounted } from "vue"

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"


// VARIABLES --------------------------------------------------
window.$message = useMessage()
window.$notify = useNotification()
window.$dialog = useDialog()


// MOUNTED --------------------------------------------------

</script>
