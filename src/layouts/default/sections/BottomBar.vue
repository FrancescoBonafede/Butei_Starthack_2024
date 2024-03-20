<template>
    <div class="md:hidden">
        <div
            class="fixed bottom-0 w-screen h-[120px] z-[100] shadow-lg"
        >
            <div class="relative h-full mt-[5px]">
                <div id="mask" class="mark"
                    :class="st_base.theme == 'light' ? 'mark-white' : 'mark-black'"
                ></div>
                <div
                    class="bg-bottom"
                    :class="st_base.theme == 'light' ? 'bg-white' : 'bg-black'"
                ></div>
                <div class="contsainer flex justify-between items-center h-full ">
    
                    <!-- HOME -->
                    <router-link to="/" class="router-container">
                        <div
                            target="home"
                            class="icon-box h-[33px] w-[33px] transition-colors duration-100 ease-in-out"
                            :class="$route.name == 'home' ? 'active' : ''"
                        >
                            <div>
                                <n-icon
                                    :color="st_base.theme == 'light' ? '#00000080' : '#ffffff80'"
                                    size="33"
                                    :component="Home"
                                />
                            </div>    
                        </div>
                    </router-link>
    
                    <!-- PRODUCTS -->
                    <router-link to="/products" class="router-container">
                        <div
                            target="products"
                            class="icon-box h-[25px] w-[25px] transition-colors duration-100 ease-in-out"
                            :class="$route.name == 'products' ? 'active' : ''"
                        >
                            <div>
                                <n-icon
                                    :color="st_base.theme == 'light' ? '#00000080' : '#ffffff80'"
                                    size="25"
                                    :component="Archive"
                                />
                            </div>    
                        </div>
                    </router-link>
    
                    <!-- CART -->
                    <router-link to="/cart" class="router-container">
                        <div
                            target="cart"
                            class="icon-box h-[33px] w-[33px] transition-colors duration-100 ease-in-out"
                            :class="$route.name == 'cart' ? 'active' : ''"
                        >
                            <div>
                                <n-badge
                                    :value="cart_count"
                                    size="11"
                                    type="success"
                                    :offset="[-5, 2]"
                                >
                                    <n-icon
                                        :color="st_base.theme == 'light' ? '#00000080' : '#ffffff80'"
                                        size="33"
                                        :component="Cart"
                                    />
                                </n-badge>
                                
                            </div>    
                        </div>
                    </router-link>
    
                    <!-- WISHLIST -->
                    <router-link v-if="st_base.auth_profile" to="/wishlist" class="router-container">
                        <div
                            target="wishlist"
                            class="icon-box h-[33px] w-[33px] transition-colors duration-100 ease-in-out"
                            :class="$route.name == 'wishlist' ? 'active' : ''"
                        >
                            <div>
                                <n-badge
                                    :value="wishlist_count"
                                    size="11"
                                    type="warning"
                                    :offset="[-3,1]"
                                >
                                    <n-icon
                                        :color="st_base.theme == 'light' ? '#00000080' : '#ffffff80'"
                                        size="33"
                                        :component="Heart"
                                    />
                                </n-badge>
                            </div>    
                        </div>
                    </router-link>
    
                    <!-- PROFILE -->
                    <router-link v-if="st_base.auth_profile" to="/profile" class="router-container">
                        <div
                            target="profile"
                            class="icon-box h-[33px] w-[33px] transition-colors duration-100 ease-in-out"
                            :class="$route.name == 'profile' ? 'active' : ''"
                        >
                            <div>
                                <n-icon
                                    :color="st_base.theme == 'light' ? '#00000080' : '#ffffff80'"
                                    size="33"
                                    :component="UserIcon"
                                />
                            </div>    
                        </div>
                    </router-link>
    
                    <!-- MENU -->
                    <a class="router-container" @click="st_base.drawer_main_sidebar = !st_base.drawer_main_sidebar" >
                        <div class="icon-box h-[33px] w-[33px] transition-colors duration-100 ease-in-out" >
                            <div>
                                <n-icon
                                    :color="st_base.theme == 'light' ? '#00000080' : '#ffffff80'"
                                    size="33"
                                    :component="Menu"
                                />
                            </div>    
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <MainSidebar
            ref="sidebar"
        />

    </div>
</template>

<script setup>

import MainSidebar from "./MainSidebar.vue"

import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon,
  Cart,
  HeartSharp as Heart
} from "@vicons/ionicons5";

import {
    Menu2 as Menu
} from "@vicons/tabler";
import {
    Archive
} from "@vicons/fa";
import {
    Home16Filled as Home
} from "@vicons/fluent";

import gsap from "gsap"
import { ref, computed, watch, onMounted } from "vue"

// PINIA --------------------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()


// ROUTER --------------------------------------------------
import { useRoute } from "vue-router"
const route = useRoute()


// WATCH --------------------------------------------------
watch(() => route, async (newRouteName) => {
    moveMark(newRouteName.name)
    st_base.drawer_main_sidebar = false
}, { deep: true })


// METHOD --------------------------------------------------
async function moveMark(routeName) {
    const targetElement = document.querySelector(`div[target="${routeName}"]`);
    if (targetElement) {

        let mark = document.querySelector(".mark")
        let offset = mark.offsetWidth / 2

        const targetPosition = targetElement.getBoundingClientRect();
        gsap.to(".mark", {
            x: targetPosition.left - offset + targetPosition.width / 2,
            y: 0,
            duration: .3,
            scale: 1,
            ease: "power2.inOut"
        });
    } else{
        gsap.to(".mark", {
            scale: 0,
            y: 20,
            duration: .3,
            ease: "power2.inOut"
        });
    }
}


onMounted(() => {
    moveMark(route.name)
})

</script>

<style lang="scss" scoped>
.mark{
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    // background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 100%);
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border-top: none;
    z-index: 2;
    
    poiter-events: none;
}


$mark-light: var(--color-primary);
$mark-dark: var(--color-secondary);

.mark-white{
    background: linear-gradient(180deg, var(--color-white) 0%, var(--color-white) 35%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 100%);
    filter: drop-shadow(0 -9px 9px #00000015);
}
.mark-black{
    background: linear-gradient(180deg, var(--color-black) 0%, var(--color-black) 35%, rgba(0,0,0,0) 35%, rgba(0,0,0,0) 100%);

    filter: drop-shadow(0 -9px 9px #ffffff15);
}


.bg-bottom{
    poiter-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 50%;
    
    &.bg-white{
        box-shadow: 0 -5px 20px #00000025
    }
    &.bg-black{
        box-shadow: 0 -5px 20px #ffffff15
    }
}
.icon-box{
    & > div{
        position: relative;
        transform: scale(.9) translateY(15px);
        transition: all .1s ease-in-out;
        z-index: 3;
    }

    &.active{
        .n-icon{
            color: var(--color-tertiary) !important;
        }
    }

    &:not(.active){
        & > div{
            transform: scale(.75) translateY(33px);
        }
        
    }
}
.router-container{
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
}


</style>