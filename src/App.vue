<template>
<div id="main-container">
    
    <!-- :theme-overrides="st_base.theme === 'dark' ? themeOverridesDark : themeOverrides" -->
    <n-config-provider
        :theme-overrides="themeOverrides"
        :theme="st_base.theme === 'dark' ? darkTheme : undefined"
                
        :locale="st_base.locale ? st_base.locale : 'it-IT'"
        :date-locale="st_base.date_locale ? st_base.date_locale : 'it-IT'"
    >
        <!-- <n-theme-editor> -->
            <n-loading-bar-provider>
                <div class="max-w-screen overflow-x-hidden" style="overflow: hidden">
                    <n-card class="card-theme !bg-body">
    
                        <Transition name="fade_long" mode="out-in">
                            <div>
                                <n-dialog-provider>
                                    <n-message-provider :placement="'top-right'">
                                        <n-notification-provider >
                                            <RouterView />
                                        </n-notification-provider>
                                    </n-message-provider>
                                </n-dialog-provider>
                            </div>
                        </Transition>
    
                    </n-card>
                </div>
            </n-loading-bar-provider>
        <!-- </n-theme-editor> -->
    </n-config-provider>
</div>
</template>
    
<script setup>
import { darkTheme } from 'naive-ui'
import { NThemeEditor } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'

import { NMessageProvider } from 'naive-ui'

import exportDarkOverride from '@/plugins/naiveui/themeOverridesDark.js'
import exportOverride from '@/plugins/naiveui/themeOverrides.js'

// PINIA ----------------------------------------
import { useBaseStore } from "@/stores/main"
let st_base = useBaseStore()

// ROUTER ----------------------------------------
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'


// VARIABLES ----------------------------------------
let theme_localstorage = localStorage.getItem("theme")
if (theme_localstorage) {
    st_base.changeTheme(theme_localstorage)
}

let locale_localstorage = localStorage.getItem("locale")
if (locale_localstorage) {
    st_base.changeLocale(JSON.parse(locale_localstorage, false))
}

let auth_profile = localStorage.getItem("auth_profile")
let token = localStorage.getItem("token")
if (auth_profile && token) {
    st_base.auth_profile = JSON.parse(auth_profile)
    st_base.token = token
} else {
    localStorage.removeItem("auth_profile")
    localStorage.removeItem("auth_token")
}

let themeOverrides = ref(null)

st_base.vw = window.innerWidth





// WATCHERS ----------------------------------------
watch(() => st_base.theme, () => {
    overrideThemes()
})



// FAKER CHANGE THEME ----------------------------------------
window.addEventListener("keydown", (e) => {
    if (process.env.NODE_ENV === 'development') {
        if (e.key === "e" && e.metaKey) {
            e.preventDefault()
            st_base.changeTheme(st_base.theme === 'dark' ? 'light' : 'dark')
        }   

        if (e.key === "d" && e.metaKey) {
            e.preventDefault()
            st_base.force_loader = !st_base.force_loader
        }
    }
})


// METHODS ----------------------------------------
function overrideThemes() {
    let override = exportOverride()
    if (st_base.theme === 'dark') {
        let dark = exportDarkOverride()
        if(dark && override) {
            for (let component in dark) {
                for (let variable in dark[component]) {
                    if (override[component]) {
                        override[component][variable] = dark[component][variable]
                    } else {
                        override[component] = dark[component]
                    }
                }
            }
        }
    } 
    themeOverrides.value = override
}


// MOUNTED ----------------------------------------
onMounted(() => {
    overrideThemes()
    window.addEventListener("resize", () => {
        st_base.vw = window.innerWidth;
    });

    // window listent esc key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            st_base.selected_menu = ''
        }
        if (e.key === "1") {
            st_base.selected_menu = 'field'
        }
        if (e.key === "2") {
            st_base.selected_menu = 'crop'
        }
        if (e.key === "3") {
            st_base.selected_menu = 'weather'
        }
    })

})
    
</script>
    
<style lang="scss">
/* -- CARD THEME -- */
.card-theme{
    &, & > .n-card__content{
        width: 100%;
        height: 100%;
        padding: 0 !important;
        margin: 0;
        border: 0 !important;
        box-shadow: none;
        background-color: transparent;
        border-radius: 0 !important;
    }
}

.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite
}
.loader::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #333;
    animation: prixClipFix 2s linear infinite ;
}
.dark .loader::before {
    border-color: #f0f0f0;
}

@keyframes rotate {
    100%   {transform: rotate(360deg)}
}

@keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
    75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
    100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
}

</style>
    