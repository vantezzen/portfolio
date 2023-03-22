<script>
	import skipSilenceImage from '$lib/images/skipsilence.png';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>Skip Silence - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="Skip Silence" image={skipSilenceImage} color="#2A2A2A" />

	<Section title="About">
		<p>
			During the pandemic, I had to watch hours of video lectures that my professors recorded. While
			some of these lectures can have a very good pace, a lot of these videos are also very slow and
			the lecturers can take very long to write something down.
		</p>
		<p class="mt-2">
			This extension{' '}
			<span class="text-orange-500 font-bold">analyzes audio</span> playing in the browser to automatically
			speed up the video when the lecturer is silent.
		</p>
		<p class="mt-2">
			The extension has been rewritten for{' '}
			<span class="text-orange-500 font-bold"> the Plasmo extension framework </span>{' '}
			to allow for easier development and maintenance. It has been installed over 10.000 times across
			Chrome and Firefox.
		</p>
	</Section>

	<Section title="Build with"
		>Build with React, TypeScript, JavaScript Media API and Plasmo.</Section
	>

	<Section title="Visit">
		<div class="flex gap-3">
			<a
				href="https://chrome.google.com/webstore/detail/skip-silence/fhdmkhbefcbhakffdihhceaklaigdllh"
				target="_blank"
				rel="noreferrer"
			>
				<Button highlighted>Visit Chrome webstore</Button>
			</a>
			<a href="https://github.com/vantezzen/skip-silence" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
