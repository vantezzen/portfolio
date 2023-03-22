<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './Button.svelte';
	import ProjectPage from './projects/ProjectPage.svelte';
	import Section from './Section.svelte';

	export let name = '';
	export let links: {
		github: string;
		firefox: string;
		chrome: string;
		edge?: string;
	} = {
		github: '',
		firefox: '',
		chrome: ''
	};

	onMount(() => {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			// Firefox
			window.location.href = links.firefox;
		} else if ((window as any).chrome) {
			// Chrome(-ium)
			window.location.href = links.chrome;
		}
	});

	const STORE_NAMES: { [key: string]: string } = {
		chrome: 'Google Chrome Webstore',
		firefox: 'Mozilla Firefox Add-ons',
		edge: 'Microsoft Edge Add-ons',
		github: 'GitHub'
	};
</script>

<ProjectPage>
	<Section title={name}>
		<h1 class="text-3xl mb-3 font-bold">
			Get {name}
		</h1>

		<div class="flex flex-col gap-4">
			{#each Object.entries(links) as [store, link] (store)}
				<a href={link}>
					<Button highlighted>
						{STORE_NAMES[store]}
					</Button>
				</a>
			{/each}
		</div>
	</Section>
</ProjectPage>
