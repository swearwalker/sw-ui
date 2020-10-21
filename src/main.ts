import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

console.info("yay")

new Vue({
  render: h => h(App)
}).$mount("#app");
