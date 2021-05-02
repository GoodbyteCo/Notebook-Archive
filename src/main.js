import Vue from 'vue';
import VueRouter from 'vue-router';
import FocusVisible from 'vue-focus-visible';

import App from './App.vue';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(FocusVisible);

const router = new VueRouter({mode: 'history', routes});

new Vue(
{
	router,
	render: h => h(App)
}).$mount('#page');
