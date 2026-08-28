<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex flex-col sm:grid sm:grid-cols-8 gap-8">
	{@render children?.()}
</div>
