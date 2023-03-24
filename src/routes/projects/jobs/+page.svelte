<script>
	import jobsImage from '$lib/images/jobs.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>Smarketer Jobs - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader preTitle="Smarketer" title="Jobs" image={jobsImage} color="#3B82F6" />

	<Section title="About">
		<p>
			A job board for Smarketer, a marketing agency based in Berlin. With its <span
				class="text-orange-500 font-bold">relaunch in 2022</span
			>, the job board was completely overhauled and built from the ground up for Core Web Vitals.
		</p>
		<p class="mt-2">
			The backend is built with Laravel and{' '}
			<span class="text-orange-500 font-bold"> follows clean code principles </span>{' '}
			to allow for easy maintenance and extensibility. It is deployed to AWS using AWS Elastic Beanstalk
			while the frontend is deployed to Vercel.
		</p>
	</Section>

	<Section title="Build with">Build with Next.js, Laravel, Tailwind CSS, and TypeScript.</Section>

	<Section title="Visit">
		<a href="https://smarketer.jobs" target="_blank" rel="noreferrer">
			<Button highlighted>Visit website</Button>
		</a>
	</Section>
</ProjectPage>
