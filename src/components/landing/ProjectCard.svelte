<script>
	export let image = '';
	export let size = 2;
	export let color = '#FFFFFF';
	export let preTitle = '';
	export let title = '';
	export let href = '';
</script>

<a
	{href}
	class="card rounded-lg shadow-brand p-5 relative"
	style="--size: {size};--color: {color};"
>
	<img src={image} alt="" style:--tag={title} class="rounded object-cover w-full h-full" />

	<div class="absolute top-0 left-0 w-full h-full">
		<div
			class="w-full h-full card-gradient rounded-lg flex justify-end items-center text-white flex-col p-4"
		>
			<p class="font-bold text-xs">
				{preTitle}
			</p>
			<h3 class="font-bold text-2xl">
				{title}
			</h3>
		</div>
	</div>
</a>

<style>
	.card {
		grid-column: span var(--size);
		background-color: var(--color);
	}

	.card-gradient {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0) 50%,
			rgba(0, 0, 0, 0.8) 100%
		);
	}
</style>
