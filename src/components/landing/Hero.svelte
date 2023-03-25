<script>
	import ColorfulBackground from './ColorfulBackground.svelte';
</script>

<section class="w-full relative overflow-hidden">
	<div class="absolute top-0 left-0 mix-blend-multiply w-full">
		<ColorfulBackground />
	</div>
	<h1
		class="text-4xl md:text-6xl font-bold text-center z-10 absolute top-0 left-0 w-full h-full flex items-center"
	>
		Crafting powerful websites and web applications
	</h1>
</section>

<style>
	h1 {
		background-color: white;
		color: black;
		mix-blend-mode: screen;
	}

	section {
		min-height: 75vh;
	}
</style>
