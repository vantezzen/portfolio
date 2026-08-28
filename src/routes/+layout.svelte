<script lang="ts">
	import './styles.css';
	import { preparePageTransition } from '$lib/page-transitions';
	import Footer from '../components/layout/Footer.svelte';
	import { setupHistory } from '$lib/history';
	import LoadingScreen from '../components/LoadingScreen.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	preparePageTransition();
	setupHistory();
</script>

<div class="app">
	<main>
		{@render children?.()}
	</main>

	<Footer />
	<LoadingScreen />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
