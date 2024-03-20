<template>
    <n-drawer
            v-model:show="st_base.drawer_main_sidebar"
            default-width="100vw"
            placement="left"
        >
            
            
            
            <n-drawer-content :title="`Header - ${index}`" closable>
                <div class="flex flex-col h-full">
                    <div>
                        <n-menu                        
                            :indent="20"
                            :root-indent="10"
                            :options="menuOptions"
                        />
                    </div>
                    <div
                        id="closeMenuSwipe"
                        class="grow"
                    ></div>
                </div>
            </n-drawer-content>
        </n-drawer> 
</template>

<script setup>

import {
    Archive
} from "@vicons/fa";
import {
    Home16Filled as Home
} from "@vicons/fluent";

import { NIcon, useMessage, NButton } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
  CloseCircleOutline as Close
} from "@vicons/ionicons5";


import { ref, computed, h } from "vue";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer) 


// ROUTER --------------------------------------------------
import { useRouter } from "vue-router"
const router = useRouter()

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()


// VARIABLES --------------------------------------------------
let loading_login = ref(false)
let index = ref(0)


// COMPUTED --------------------------------------------------
let menuOptions = computed(() => {


    let _menu = [

        // HOME
        {
            label: () => h(
                RouterLink, { to: { name: "home" }},
                { default: () => "Home" }
            ),
            key: "go-back-home",
            icon: renderIcon(Home)
        },
        { key: "divider-1", type: "divider", props: {} },

        // PRODUCTS
        {
            label: () => h(
                RouterLink, { to: { name: "products" }},
                { default: () => "Prodotti" }
            ),
            key: "products",
            icon: renderIcon(Archive)
        },
        { key: "divider-2", type: "divider", props: {} },

        // CATEGORY
        {
            label: "Categorie",
            key: "category",
            icon: renderIcon(Archive),
            children: []
        },
        { key: "divider-pre-profile", type: "divider", props: {} },
        
    ]
    
    // PROFILE ----------------------------------------
    let insertIndex = _menu.findIndex(item => item.key === 'divider-pre-profile');
    if (insertIndex !== -1) {
        insertIndex += 1;
    } else {
        insertIndex = _menu.length; 
    }

    if (st_base.auth_profile) {
        _menu.splice(insertIndex, 0, {
            label: () => h(
                RouterLink, { to: "/profile" },
                { default: () => "Profilo" }
            ),
            key: "profile",
            icon: renderIcon(UserIcon)
        });

        // Aggiungi il divider subito dopo
        _menu.splice(insertIndex + 1, 0, { key: "divider-5", type: "divider", props: {} });
    }


    // LOGIN/LOGOUT ----------------------------------------
    if (st_base.auth_profile){
        _menu.push({
            label: () => h(
                NButton,
                {
                    text: true,
                    class: "like-router-link",
                    loading: loading_login.value,
                    onClick: async () => {
                        loading_login.value = true
                        await st_base.logout()
                        st_base.drawer_main_sidebar = false
                    }
                },
                {
                    default: () => "Logout",
                    icon: () => h(NIcon, [h(LogoutIcon)]),
                }
            ),
            key: "logout",
        })
    } else {
        _menu.push({
            label: () => h(
                NButton,
                {
                    text: true,
                    class: "like-router-link",
                    onClick: () => {
                        router.push("/login")
                        st_base.drawer_main_sidebar = false
                    }
                },
                {
                    default: () => "Login",
                    icon: () => h(NIcon, [h(LogoutIcon)]),
                }
            ),
            key: "login",
        })
    }

    return _menu
})

watch(() => st_base.drawer_main_sidebar, async (value) => {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })

    Observer.create({
        target: "#closeMenuSwipe",
        ignore: window,
        type: "touch",
        lockAxis: true,
        axis: "x",
        dragMinimum: st_base.vw / 5,
        
        onLeft: () => {
            st_base.drawer_main_sidebar = false
        },
    });
})



// METHODS --------------------------------------------------
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}



</script>

<style lang="scss" scoped>

</style>