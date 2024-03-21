<template>
<div class="min-h-screen flex flex-col">

	<!-- <div class="grow flex flex-col"> -->
	<div>
		<router-view class="block h-full" v-slot="{ Component }">
			<Transition name="fade" mode="out-in">
				<component class="h-full" :is="Component" />
			</Transition>
		</router-view>
	</div>


</div>
</template>

<script setup >

import { useMessage } from 'naive-ui'
import { useNotification } from 'naive-ui'
import { useDialog } from 'naive-ui'

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"


// VARIABLES --------------------------------------------------
window.$message = useMessage()
window.$notify = useNotification()
window.$dialog = useDialog()


// MOUNTED --------------------------------------------------

</script>
