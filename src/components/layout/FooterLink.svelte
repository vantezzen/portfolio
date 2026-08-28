<script lang="ts">
	interface Props {
		href?: string;
		children?: import('svelte').Snippet;
	}

	let { href = '', children }: Props = $props();
</script>

<a
	{href}
	class="inline-flex font-medium text-gray-900 transition-all duration-200 transform font-pj hover:text-gray-600"
>
	{@render children?.()}
</a>
