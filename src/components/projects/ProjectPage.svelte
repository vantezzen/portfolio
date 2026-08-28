<script lang="ts">
	import { goBack } from '$lib/history';
	import chevronLeftIcon from 'feather-icons/dist/icons/chevron-left.svg';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<button onclick={goBack} class="text-zinc-600 flex items-center gap-2 text-sm font-bold">
	<img src={chevronLeftIcon} alt="Go back" class="h-5" />
	Go back
</button>

<div class="project-page px-6 md:px-24 py-12 flex flex-col gap-4">
	{@render children?.()}
</div>
