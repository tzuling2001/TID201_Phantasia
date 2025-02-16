import "./Assets/css/global.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

// import Parallax from "parallax-js";

import App from "./App.vue";
import router from "./router";
import $ from "jquery";
// import "animate.css";
// import "lettering.js";

if (typeof window !== "undefined") {
  window.$ = $;
  window.jQuery = $;
}
// import "textillate";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
