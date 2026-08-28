<script lang="ts">
	interface Props {
		color?: string;
		size?: number;
		children?: import('svelte').Snippet;
	}

	let { color = 'orange-500', size = 2, children }: Props = $props();
</script>

<div class="card rounded-lg shadow-brand p-5 {color}" style="--size: {size};">
	{@render children?.()}
</div>

<style>
	.card {
		grid-column: span var(--size);
	}
</style>
