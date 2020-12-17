import Home from './pages/Home.vue';
import Notebook from './pages/Notebook.vue';
import Error from './pages/404.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/book/:number', component: Notebook },
	{ path: '/file/*' },
	{ path: "*", component: Error, name: '404' },
];

export default routes;