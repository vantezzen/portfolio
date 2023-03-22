<script>
	import jobsImage from '$lib/images/jobs.png';
	import Button from '../../components/Button.svelte';
	import ProjectHeader from '../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../components/projects/ProjectPage.svelte';
	import Section from '../../components/Section.svelte';
</script>

<svelte:head>
	<title>Privacy policies for browser extensions - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
	<meta name="robots" content="noindex" />
</svelte:head>

<ProjectPage>
	<Section title="Privacy policies">
		<h1 class="text-xl font-bold">Privacy policies for browser extensions</h1>
		<p>Please select a browser extension</p>

		<div class="flex flex-col gap-4">
			<a href="/browserprivacy/skip-silence">
				<Button highlighted>Skip Silence</Button>
			</a>
			<a href="/browserprivacy/dontbugme">
				<Button highlighted>Don't Bug Me</Button>
			</a>
			<a href="/browserprivacy/bangs">
				<Button highlighted>Bangs for Google</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
