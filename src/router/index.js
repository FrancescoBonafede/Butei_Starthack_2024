import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	async scrollBehavior(to, from, savedPosition) {
		await new Promise((resolve) => setTimeout(resolve, 100))
		return { top: 0 }
	},
	routes: [
		{
			path: '/',
			component: () => import('@/layouts/default/TheModule.vue'),
			children: [
				{
					path: '',
					name: 'home',
					component: () => import('@/pages/home/TheHome.vue'),
				},
				{
					path: '/:pathMatch(.*)*',
					component: () => import('@/pages/404/404View.vue'),
				},
			]
		},

	]
})

import { useBaseStore } from "@/stores/main"
router.beforeEach((to, from, next) => {

	const st_base = useBaseStore()
	
	st_base.vw = window.innerWidth
	st_base.drawer_main_sidebar = false

	if( to.meta.authorization === true && st_base.auth_profile != true)
		next('/')

	if( to.meta.unauthorization === true && st_base.auth_profile != false)
		next('/')


	
	next()

	// next tick
	// await new Promise((resolve) => setTimeout(resolve, 100))
	// window.scrollTo(0, 0)

})

export default router
