<script lang="ts">
	interface Props {
		highlighted?: boolean;
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		children?: import('svelte').Snippet;
	}

	let { highlighted = false, type = 'button', children }: Props = $props();
</script>

<button
	class={`${
		highlighted
			? 'text-fire-500 bg-fire-900/10 hover:bg-fire-900/20'
			: 'text-fire-500 hover:bg-fire-900/10'
	}  font-medium rounded-lg py-3 px-6 duration-200 w-full`}
	{type}
>
	{@render children?.()}
</button>
