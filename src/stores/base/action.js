import api from "@/services/baseApiService.js"
import { i18n } from '@/main'




export default {

    // --------- Chimate di test ---------
    async get_di_test(string = "") {
        return await api.server_fetch("loadProducts", {}, { string: string })
        .then( async result => {
            return result
        })
    },
    // --------- Chimate di test ---------

    /* 
    *  Change theme
    *  cambia il tema dell'applicazione
    */
    changeTheme(new_theme) {
        if (new_theme == null) {
            this.theme = this.theme == "dark" ? "light" : "dark"
        } else {
            this.theme = new_theme
        }

        // aggiungi a html class dark
        if (this.theme == "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

        localStorage.setItem("theme", this.theme)
    },

    /* 
    *  Change locale
    *  cambia la lingua dell'applicazione, sia per il testo che per le date
    */
    changeLocale(objectLocale, set_locale = true) {

        this.locale = objectLocale.locale
        this.date_locale = objectLocale.date_locale

        if(set_locale)
            localStorage.setItem("locale", JSON.stringify(objectLocale))

        i18n.global.locale.value = objectLocale.i18n
    },


    /* 
    *   Login
    */
    async login(force_redirect = false){

        this.auth_profile = true
        this.token = Math.floor(Math.random() * 1101) + 1000;


        const target = force_redirect ? force_redirect : (this.route.query.target || '/')
        this.router.push(target)

        localStorage.setItem("auth_profile", true)
        localStorage.setItem("token", this.token)
        

        return
    },
    async logout(){
        this.auth_profile = false
        this.token = null

        this.router.push(`/`)

        localStorage.removeItem("auth_profile")
        localStorage.removeItem("token")
        return true
    }

}
