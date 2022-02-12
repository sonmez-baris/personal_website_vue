import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import './registerServiceWorker';
import router from './router';
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faVuejs, faHeart, faCode);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app');
