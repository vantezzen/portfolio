<script>
	import wonderrailImage from '$lib/images/wonderrail.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>WonderRail - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="WonderRail" image={wonderrailImage} color="#58d677" />

	<Section title="About">
		<p>
			WonderRail is a <span class="text-orange-500 font-bold">web-based InterRail trip planner</span
			> that allows users to plan their InterRail trips and share them with friends.
		</p>
		<p class="mt-2">
			I've done an InterRail trip across France but found existing trip planners to be lacking in
			features or too complicated to use. I've decided to build my own trip planner, integrating
			features I've missed during my trip and later decided to polish it and release it.
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			WonderRail is designed to be a <span class="text-orange-500 font-bold"
				>progressive web app</span
			>
			with full offline support. It's been a fun way to learn more about the Service Worker API and how
			to build offline-first web apps.<br />
			I've also learned about the challenges of
			<span class="text-orange-500 font-bold">integrating data from several third-party APIs</span> into
			a single output, especially when based on physical locations with small inaccuracies across different
			APIs.
		</p>
	</Section>

	<Section title="Build with">Build with NextJS, deck.gl and Mapbox.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://wonderrail.com" target="_blank" rel="noreferrer">
				<Button highlighted>Visit WonderRail</Button>
			</a>
			<a href="https://github.com/vantezzen/wonderrail" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
