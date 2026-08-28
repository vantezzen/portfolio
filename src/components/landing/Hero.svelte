<script>
	import ColorfulBackground from './ColorfulBackground.svelte';
</script>

<section class="w-full relative overflow-hidden">
	<div class="absolute top-0 left-0 mix-blend-multiply w-full h-full">
		<ColorfulBackground />
	</div>
	<h1
		class="text-4xl md:text-6xl font-bold text-center z-10 absolute top-0 left-0 w-full h-full flex items-center"
	>
		Crafting powerful websites and web applications
	</h1>

	<!-- Chevron down -->
	<svg
		class="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-6 animate-[bounce_2s_infinite] z-10 text-zinc-500"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
	</svg>
</section>

<style>
	h1 {
		background-color: white;
		color: black;
		mix-blend-mode: screen;
	}

	section {
		min-height: 100vh;
	}
</style>
