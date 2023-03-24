<script>
	export let image = '';
	export let color = '#FFFFFF';
	export let preTitle = '';
	export let title = '';
</script>

<div class="rounded-lg header relative w-full" style="--color: {color};">
	<img src={image} alt="" style:--tag={title} class="h-full" />

	<div class="absolute top-0 left-0 w-full h-full">
		<div
			class="w-full h-full card-gradient rounded-lg flex justify-end items-center text-white flex-col p-4"
		/>
	</div>
</div>

<div class="flex flex-col gap-3 my-6 font-bold">
	{#if preTitle}
		<p class="text-zinc-600">{preTitle}</p>
	{/if}
	<h1 class="text-4xl">{title}</h1>
</div>

<style>
	.header {
		background-color: var(--color);
		height: 20rem;
	}

	img {
		height: 20rem;
		width: 100%;
		object-fit: contain;
		object-position: center center;
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
