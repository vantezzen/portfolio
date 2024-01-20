<script>
	import purrsonaImage from '$lib/images/purrsona.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>Purrsona - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="Purrsona" image={purrsonaImage} color="#f3e8ff" />

	<Section title="About">
		<p>
			Purrsona allows creating <span class="text-orange-500 font-bold"
				>personalized Spotify playlists for pets</span
			>. For this, the user uploads a picture of their pet and Purrsona analyzes the breed of the
			pet and creates a personalized playlist based on the song history of the user and breed
			information.
		</p>
		<p class="mt-2">
			The project has mainly been created as a fun side project to learn more about the Spotify API
			and
			<span class="text-orange-500 font-bold">machine learning</span>. The underlying algorithm for
			creating playlist checks a list of attributes contributed to the breed of the pet and creates
			a playlist of songs that match these attributes.
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			A large challenge in creating Purrsona was <span class="text-orange-500 font-bold"
				>creating a machine learning model</span
			>
			that has a possibility of being accurate while still being small enough to be run in the browser.
		</p>
		<p class="mt-2">
			As a goal, the model didn't need to be accurate in all cases, but instead having a chance of
			getting a correct or at least similar result in 50% of cases as it would give users a sense of
			the algorithm working and actually being tailored to their pet.
		</p>
	</Section>

	<Section title="Build with">Build with NextJS, Teachable Machine and the Spotify API.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://purrsona.vantezzen.io" target="_blank" rel="noreferrer">
				<Button highlighted>Visit Purrsona</Button>
			</a>
			<a href="https://github.com/vantezzen/music-purrsona" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
