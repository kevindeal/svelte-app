import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Tiny Shiv Team'
	}
});

export default app;