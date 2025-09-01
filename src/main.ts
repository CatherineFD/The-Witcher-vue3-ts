import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';
import router from './router';
import { createYmaps } from "vue-yandex-maps";
import 'vue-multiselect/dist/vue-multiselect.min.css';
import { createHead } from '@vueuse/head';

const app = createApp(App);
const head = createHead();
app.use(router)
    .use(createYmaps({
        apikey: '9df68af6-8e31-4416-9715-a8d5171be308',
    }))
    .use(head)
    .mount('#app');
