<script>
	import About from '../components/landing/About.svelte';
	import Hero from '../components/landing/Hero.svelte';
	import Projects from '../components/landing/Projects.svelte';
	import Tech from '../components/landing/Tech.svelte';
	import Wrapped from '../components/landing/Wrapped.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<section class="flex flex-col gap-24">
	<Hero />
	<Wrapped />
	<About />
	<Projects />
	<Tech />
</section>
