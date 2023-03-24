// Based on: https://github.com/geoffrich/sveltekit-view-transitions/blob/main/src/lib/page-transition.js
import { beforeNavigate } from '$app/navigation';
import { navigating } from '$app/stores';
import { onDestroy } from 'svelte';

function getNavigationStore() {
	let callbacks: ((val?: any) => void)[] = [];

	const navigation = {
		...navigating,
		complete: async () => {
			await new Promise((res, _) => {
				callbacks.push(res);
			});
		}
	};

	// This used to subscribe inside the callback, but that resolved the promise too early
	const unsub = navigating.subscribe((n) => {
		if (n === null) {
			while (callbacks.length > 0) {
				const res = callbacks.pop();
				res?.();
			}
		}
	});

	onDestroy(() => {
		unsub();
	});

	return navigation;
}

export const preparePageTransition = () => {
	const navigation = getNavigationStore();

	// before navigating, start a new transition
	beforeNavigate(() => {
		if (!document.startViewTransition) {
			return;
		}
		const navigationComplete = navigation.complete();

		document.startViewTransition(async () => {
			console.log('start transition');
			await navigationComplete;
		});
	});
};
