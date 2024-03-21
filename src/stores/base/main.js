import { defineStore } from "pinia";
import actions from "./action";

import { enUS, dateEnUS } from "naive-ui";

// ROUTER ----------------------------------------
import { useRouter, useRoute } from 'vue-router'



export default defineStore('base', {
  id: "base",
  state: () => ({
    router: useRouter(),
    route: useRoute(),

    selected_menu: "",
    partial_selected_crops: "",
    selected_crops: "",
    money: 400,


    title: "PINIA Base Store",
    force_loader: false,
    
    auth_profile: false, // authenticated user profile
    token: null, // token
    
    drawer_main_sidebar: false,

    theme: "light",
		locale: enUS,
		date_locale: dateEnUS
  }),
  
  getters: {},
  actions,
});
