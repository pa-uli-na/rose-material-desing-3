import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./theme/styles.css";

import "@material/mwc-textfield";
import "@material/mwc-button";
import "@material/mwc-checkbox";
import "@material/mwc-formfield";
import "@material/mwc-icon";
import "@material/mwc-icon-button";
import "@material/mwc-radio";
import "@material/mwc-switch";
import "@material/mwc-top-app-bar";
import "@material/mwc-top-app-bar-fixed";

import "@material/mwc-ripple";
import "@material/mwc-line-ripple";

import "@material/animation";

createApp(App).use(router).mount("#app");
