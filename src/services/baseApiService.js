import { axios, axiosInstance } from '@/plugins/axios';

import mainStore from "@/stores/main";
import { NAlert } from "naive-ui";

export default {

    get_base_url() {
        return process.env.BACKEND_BASE_URL || null;
    },

    get_available_routes() {
        return {
            // AUTH
            "forecast": {
                path: "https://services.cehub.syngenta-ais.com/api/Forecast/ShortRangeForecastHourly?{string}",
                method: "GET",
                auth: true
            },
        };
    },

    get_url(route_path, param = {}) {
        for (const key in param) {
            route_path = route_path.replace(`{${key}}`, param[key]);
        }
        // let _url = this.get_base_url() + '/' + route_path;
        let _url = route_path;
        return _url;
    },

    get_route(route_name) {
        const routes = this.get_available_routes();
        if (!routes[route_name]) {
            throw new Error('route_name not found');
        }
        return routes[route_name];
    },

    async server_fetch(route_name, config = {}, param = null, notification_error = true, use_custom_axios_instance = true) {
        const route = this.get_route(route_name);
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        
        if (route.auth) {
            // const _token = mainStore.computed.baseStore().token;
            // if (!_token) throw new Error('token not found');
            headers["ApiKey"] = `1b49ed5e-3aec-4088-ab02-1ec9efbaf4eb`;
        }

        const requestOptions = {
            method: config.method ? config.method : route.method,
            headers: config.headers ? config.headers : headers,
            redirect: 'follow'
        };

        if (config.body) {
            requestOptions.data = config.body;
        }

        let url = this.get_url(route.path, param);
        
        try {
            let response = null
            if(use_custom_axios_instance) {
                response = await axiosInstance(url, requestOptions);
            } else {
                response = await axios(url, requestOptions);
            }

            // Simulazione di un ritardo di 1 secondo
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log("response", response);

            return response.data;
        } catch (error) {
            if (notification_error){
                let extend_props = {
                    title: error.code || "ERROR!",
                };
                window.$message.error(
                    error.message || 'Si è verificato un errore',
                    {
                        render: (props) => renderMessage({ ...props, ...extend_props }),
                        closable: true,
                    }
                )
            }

            let _error = {
                error: error,
                code: error.code,
                type: 'error',
            };
            return _error;
        }
    }



};

/*
*   RENDER MESSAGE --------------------------------
*   il messaggio di errore viene visualizzato tramite un componente NAlert di Naive UI
*   situato in nel TheModule.vue che contiene il componente che richiama il metodo server_fetch
*/
const renderMessage = (props) => {
    const { type } = props;
    return h(
        NAlert,
        {
        closable: props.closable,
        onClose: props.onClose,
        type: type === "loading" ? "default" : type,
        title: props.title || type,
        style: {
            boxShadow: "var(--n-box-shadow)",
            maxWidth: "calc(100vw - 32px)",
            width: "480px"
        }
        },
        {
        default: () => props.content
        }
    );
};