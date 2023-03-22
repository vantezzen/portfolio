<script>
	import Card from '../Card.svelte';
	import CardGrid from '../CardGrid.svelte';
	import Section from '../Section.svelte';

	import jobsImage from '$lib/images/jobs.png';
	import skipSilenceImage from '$lib/images/skipsilence.png';
	import neonFinImage from '$lib/images/neonfin.png';
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
			image={gitHubImage}
			size={4}
			color="#24292F"
			preTitle="More projects on"
			title="GitHub"
			href="https://github.com/vantezzen"
		/>
	</CardGrid>
</Section>
