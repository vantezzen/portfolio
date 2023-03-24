<script>
	import Card from '../Card.svelte';
	import CardGrid from '../CardGrid.svelte';
	import Section from '../Section.svelte';

	import jobsImage from '$lib/images/jobs.png?webp&w=800&imagetools';
	import skipSilenceImage from '$lib/images/skipsilence.png?webp&w=800&imagetools';
	import neonFinImage from '$lib/images/neonfin.png?webp&w=800&imagetools';
	import asditheringImage from '$lib/images/asdithering.png?webp&w=800&imagetools';
	import blympioImage from '$lib/images/blympio.png?webp&w=800&imagetools';
	import powImage from '$lib/images/pow.svg';
	import gitHubImage from '$lib/images/github.svg';

	import ProjectCard from './ProjectCard.svelte';
</script>

<Section title="Projects">
	<CardGrid>
		<ProjectCard
			image={jobsImage}
			size={3}
			color="#3B82F6"
			preTitle="Smarketer"
			title="Jobs"
			href="/projects/jobs"
		/>
		<ProjectCard
			image={skipSilenceImage}
			size={5}
			color="#2A2A2A"
			preTitle=""
			title="Skip Silence"
			href="/projects/skip-silence"
		/>
		<ProjectCard
			image={neonFinImage}
			size={4}
			color="#18181B"
			preTitle=""
			title="neonFin"
			href="/projects/neonfin"
		/>
		<ProjectCard
			image={asditheringImage}
			size={4}
			color="#EBEBEB"
			preTitle="Technical project"
			title="asdithering"
			href="/projects/asdithering"
		/>
		<ProjectCard
			image={blympioImage}
			size={3}
			color="#f5f2f9"
			title="blymp.io"
			href="/projects/blympio"
		/>
		<ProjectCard
			image={powImage}
			size={3}
			color="#212121"
			preTitle="Technical project"
			title="pow"
			href="/projects/pow"
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
