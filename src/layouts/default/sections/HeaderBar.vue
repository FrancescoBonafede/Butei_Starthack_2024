<template>
    <div class="relative">

        <!-- HEADER -->
        <div class="fixed top-0 left-0 flex items-center w-screen shadow bg-background-100 dark:bg-background z-[1000] h-[50px]">
            <div class="container">
                <div class="flex items-center justify-between py-2">

                    <!-- SX -->
                    <router-link to="/">
                        <h5 class="font-semibold" @mouseenter="openMegamenu = false" >HEADER</h5>
                    </router-link>
                    

                    <!-- CENTER -->
                    <div class="hidden md:flex gap-4">
                        <router-link
                            to="/"
                            @mouseenter="openMegamenu = false"
                        >Home</router-link>
                        <router-link
                            to="/products"
                            @mouseenter="openMegamenu = false"
                        >Prodotti</router-link>
                        
                        <a 
                            class="cursor-pointer "
                            :class="{ 'pointer-events-none opacity-80': categories === null }"
                            @mouseenter="openMegamenu = true"
                        >Categorie</a>
                        
                    </div>

                    <!-- DX -->
                    <div
                        class="flex items-center gap-5"
                        @mouseenter="openMegamenu = false"
                    >
                        <div class="max-md:hidden">
                            <n-dropdown
                                v-if="st_base.auth_profile"
                                class="min-w-[250px]"
                                trigger="hover"
                                placement="bottom-end"
                                :options="options"
                            >
                                <div class="flex">
                                    <a class="cursor-pointer" >
                                        Francesco Bonafede
                                    </a>
                                </div>
                            </n-dropdown>
                        </div>
                        <n-icon
                            size="22"
                            v-if="mode === 'development'"
                            @click="st_base.changeTheme()"
                        >
                            <Theme />
                        </n-icon>
                        <n-icon
                            size="22"
                            v-if="mode === 'development'"
                            @click="st_base.force_loader = !st_base.force_loader"
                        >
                            <Loader />
                        </n-icon>
                    </div>

    
                </div>
            </div>
        </div>



    </div>
</template>

<script setup>
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Cart as CartIcon,
  HeartSharp as Heart
} from "@vicons/ionicons5";
import {
    Loader
} from "@vicons/tabler";
import {
    AppsListDetail20Filled as Order,
    DarkTheme20Filled as Theme,
} from "@vicons/fluent";

import { NAvatar, NText, NIcon } from "naive-ui";

import { ref, h, computed } from "vue";


// PINIA ----------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()


// ROUTER ----------------------------------------
import { useRouter } from "vue-router"
const router = useRouter()


// VARIABLES ----------------------------------------
let openMegamenu = ref(false)
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};


// COMPUTED ----------------------------------------
let options = computed(() => {
    let baseOptions = [
        {
            key: "header",
            type: "render",
            render: renderCustomHeader
        },
        {
            key: "header-divider",
            type: "divider"
        }
    ]

    if (st_base.auth_profile) {
        baseOptions.push(
            {
                label: 'Profile',
                key: 'profile',
                props: {
                    onClick: () => router.push("/profile/view"),
                },
                icon: renderIcon(UserIcon)
            },
            {
                label: 'Edit Profile',
                key: 'editProfile',
                props: {
                    onClick: () => router.push("/profile/edit"),
                },
                icon: renderIcon(EditIcon)
            },
            {
                label: 'Ordini',
                key: 'ordersProfile',
                props: {
                    onClick: () => router.push("/profile/orders"),
                },
                icon: renderIcon(Order)
            },
        )
    }

    return baseOptions
})


let mode = computed(() => {
    return process.env.NODE_ENV
})


// FUNCTIONS ----------------------------------------
function renderCustomHeader() {
  return h(
    "div",
    {
      style: "display: flex; align-items: center; padding: 8px 12px;"
    },
    [
      h(NAvatar, {
        round: true,
        style: "margin-right: 12px;",
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"
      }),
      h("div", null, [
        h("div", null, [
          h(NText, { depth: 2 }, { default: () => st_base.auth_profile ? "Francesco Bonafede" : "Ospite"})
        ]),
        h("div", { style: "font-size: 12px;" }, [
          h(NText, { depth: 3 }, { default: () => "<???>" })
        ])
      ])
    ]
  );
}

</script>

<style lang="scss" scoped>

</style>