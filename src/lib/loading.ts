import { writable } from 'svelte/store';

export const loading = writable(false);

export function startLoading(timeout = 1000) {
	loading.set(true);
	setTimeout(() => {
		loading.set(false);
	}, timeout);
}
