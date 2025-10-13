<script>
	import CardGrid from '../CardGrid.svelte';
	import Section from '../Section.svelte';

	import skipSilenceImage from '$lib/images/skipsilence.png?webp&w=800&imagetools';
	import asditheringImage from '$lib/images/asdithering.png?webp&w=800&imagetools';
	import wonderrailImage from '$lib/images/wonderrail.png?webp&w=800&imagetools';
	import wrappedImage from '$lib/images/wrapped.png';
	import gitHubImage from '$lib/images/github.svg';

	import ProjectCard from './ProjectCard.svelte';
</script>

<Section title="Projects">
	<CardGrid>
		<ProjectCard
			image={wonderrailImage}
			size={5}
			color="#58d677"
			preTitle=""
			title="WonderRail"
			href="/projects/wonderrail"
		/>
		<ProjectCard
			image={skipSilenceImage}
			size={3}
			color="#2A2A2A"
			preTitle=""
			title="Skip Silence"
			href="/projects/skip-silence"
		/>
		<ProjectCard
			image={wrappedImage}
			size={3}
			color="#FFFFFF"
			title="Wrapped"
			href="/projects/wrapped"
		/>
		<ProjectCard
			image={asditheringImage}
			size={3}
			color="#EBEBEB"
			preTitle="Technical project"
			title="asdithering"
			href="/projects/asdithering"
		/>
		<ProjectCard
			image={gitHubImage}
			size={2}
			color="#24292F"
			preTitle="More projects on"
			title="GitHub"
			href="https://github.com/vantezzen"
		/>
	</CardGrid>
</Section>
