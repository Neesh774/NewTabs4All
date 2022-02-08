import App from './App.svelte';
import splitbee from '@splitbee/web';

splitbee.init()
splitbee.track("Create New Tab");
const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;