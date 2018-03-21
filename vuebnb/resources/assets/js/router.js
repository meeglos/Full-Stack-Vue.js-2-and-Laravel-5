import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HomePage from '../components/HomePage.vue';
import ListingPage from '../components/ListingPage.vue';

export default new VueRouter({
	mode: 'history',
	routes: [
<<<<<<< HEAD
		{ path: '/', component: HomePage, name: 'home' }, 
		{ path: '/listing/:listing', component: ListingPage, name: 'listing' }
	],
	scrollBehavior (to, from, savedPosition) {
			return { x: 0, y: 0 }
	}
=======
		{ path: '/', component: HomePage }, 
		{ path: '/listing/:listing', component: ListingPage }
	]
>>>>>>> 9be42d17ef9d6da738fbf5d5fa313ac989f9f18a
});