<script>
	import autoformImage from '$lib/images/autoform.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>autoform - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="autoform" image={autoformImage} color="#F5F6F8" />

	<Section title="About">
		<p>
			AutoForm is a Typescript library that turns zod validation schemas into <span
				class="text-orange-500 font-bold">working forms</span
			> with labels, defaults, field types, and validation wired in.
		</p>
		<p class="mt-2">
			I created the library for my own project, but it now achieves <span
				class="text-orange-500 font-bold">50k+ weekly downloads</span
			> from other developers.
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			A large challenge in creating autoform was <span class="text-orange-500 font-bold"
				>creating a stable base library</span
			>
			that can be universally used across different integrations.
		</p>
		<p class="mt-2">
			The goal was to make autoform work with whatever libraries are used - zod, yup, joi,
			react-hook-form, MUI, shadcn/ui, etc.
		</p>
	</Section>

	<Section title="Build with">Build with TypeScript, TurboRepo.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://autoform.vantezzen.io" target="_blank" rel="noreferrer">
				<Button highlighted>Visit docs</Button>
			</a>
			<a href="https://github.com/vantezzen/autoform" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
