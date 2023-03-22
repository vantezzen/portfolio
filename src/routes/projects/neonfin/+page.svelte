<script>
	import neonFinImage from '$lib/images/neonfin.png';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>neonFin - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="neonFin" image={neonFinImage} color="#18181B" />

	<Section title="About">
		<p>
			neonFin is a personal finance tool designed to help <span class="text-orange-500 font-bold"
				>uncover hidden spending habits</span
			> and manage money more effectively. With advanced analytics in real-time, neonFin enables tracking
			expenses by category, spot trends, and identify areas where users can improve their finances.
		</p>
		<p class="mt-2">
			neonFin's <span class="text-orange-500 font-bold">AI-powered receipt</span> and barcode
			scanning feature eliminates manual data entry and makes adding new purchases to your budget a
			breeze. Its <span class="text-orange-500 font-bold">engaging points system</span> turns budgeting
			into a game, allowing users to earn points and unlock levels as they stick to their budget. With
			neonFin, users can take control of their finances and make informed choices about their lifestyle.
		</p>
	</Section>

	<Section title="Build with">Build with React, TypeScript and Firebase.</Section>

	<Section title="Visit">
		<a href="https://neonfin.app" target="_blank" rel="noreferrer">
			<Button highlighted>Visit website</Button>
		</a>
	</Section>
</ProjectPage>
