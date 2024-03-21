import { defineStore } from "pinia";
import actions from "./action";

import { itIT, dateItIT } from "naive-ui";

// ROUTER ----------------------------------------
import { useRouter, useRoute } from 'vue-router'



export default defineStore('base', {
  id: "base",
  state: () => ({
    router: useRouter(),
    route: useRoute(),

    selected_menu: "",


    title: "PINIA Base Store",
    force_loader: false,
    
    auth_profile: false, // authenticated user profile
    token: null, // token
    
    drawer_main_sidebar: false,

    theme: "light",
		locale: itIT,
		date_locale: dateItIT
  }),
  
  getters: {},
  actions,
});
