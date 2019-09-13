export default {
    install(Vue, options) {
        var api = window.location.origin + "/api";
        if ( options !== undefined ) {
            if ( options.api !== undefined ) {
                api = options.api;
            }
        }
        Vue.prototype.backend = function(url, options) {
            var full_url = api + url;
            var args = {
                mode: "cors",
                redirect: "follow",
                credentials: 'include',
            }
            if ( options !== undefined ) {
                Object.assign(args, options);
            }
            return fetch(full_url, args);
        }
        Vue.prototype.alert = function(alert_type, alert_msg) {
            this.$store.commit("alert", {type:alert_type, msg: alert_msg});
        }
    }
}


