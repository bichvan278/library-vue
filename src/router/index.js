import Vue from 'vue';
import Router from 'vue-router';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import ForgotPassword from '@/components/ForgotPassword';
import HomePage from '@/components/HomePage';
import BookForm from '@/components/book/BookForm';
import UserProfile from '@/components/user/UserProfile';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'signin',
			component: SignIn,
			meta: { guest: true }
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignUp,
			meta: { guest: true }
		},
		{
			path: '/forgotpassword',
			name: 'forgotpassword',
			component: ForgotPassword,
			meta: { guest: true }
		},
		{
			path: '/homepage',
			name: 'homepage',
			component: HomePage,
			meta: { requiresAuth: true }
		},
		{
			path: '/bookform',
			name: 'bookform',
			component: BookForm,
			meta: { requiresAuth: true }
		},
		{
			path: '/profile',
			name: 'profile',
			component: UserProfile,
			meta: { requiresAuth: true }
		}
	]
});

export default router;