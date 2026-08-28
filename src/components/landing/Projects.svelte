<script>
	import CardGrid from '../CardGrid.svelte';
	import Section from '../Section.svelte';

	import skipSilenceImage from '$lib/images/skipsilence.png?webp&w=800&imagetools';
	import asditheringImage from '$lib/images/asdithering.png?webp&w=800&imagetools';
	import autoformImage from '$lib/images/autoform.png?webp&w=800&imagetools';
	import fresnelImage from '$lib/images/fresnel.png?webp&w=800&imagetools';
	import wrappedImage from '$lib/images/wrapped.png';
	import gitHubImage from '$lib/images/github.svg';

	import ProjectCard from './ProjectCard.svelte';
</script>

<Section title="Projects">
	<CardGrid>
		<ProjectCard
			image={fresnelImage}
			size={4}
			color="#271021"
			preTitle="macOS App"
			title="Fresnel"
			href="/projects/fresnel"
		/>
		<ProjectCard
			image={autoformImage}
			size={4}
			color="#F5F6F8"
			preTitle=""
			title="autoform"
			href="/projects/autoform"
		/>
		<ProjectCard
			image={wrappedImage}
			size={3}
			color="#FFFFFF"
			title="Wrapped"
			href="/projects/wrapped"
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
			image={asditheringImage}
			size={2}
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
