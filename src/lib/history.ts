import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
import { get, writable } from 'svelte/store';
import { base } from '$app/paths';

export type HistoryEntry = {
	path: string;
	scroll: number;
};

export const navigationHistory = writable<HistoryEntry[]>([]);

export function addPage(page: string) {
	if (
		get(navigationHistory).length > 0 &&
		get(navigationHistory)[get(navigationHistory).length - 1].path === page
	)
		return;

	navigationHistory.update((history) => [
		...history,
		{
			path: page,
			scroll: window.scrollY
		}
	]);
}

export function popPage(): HistoryEntry | undefined {
	let history = get(navigationHistory);
	let page = history.pop();
	navigationHistory.set(history);
	return page;
}

export function setupHistory() {
	beforeNavigate(({ from }) => {
		addPage(from?.url.pathname || base);
	});
}

export function goBack() {
	const page = popPage() || { path: '/', scroll: 0 };

	goto(page.path).then(() => {
		window.scrollTo(0, page.scroll);
	});
}
