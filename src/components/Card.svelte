<script>
	export let color = 'orange-500';
	export let size = 2;
</script>

<div class="card rounded-lg shadow-brand p-5 {color}" style="--size: {size};">
	<slot />
</div>

<style>
	.card {
		grid-column: span var(--size);
	}
</style>
