<script>
	import Card from '../../components/Card.svelte';
	import Section from '../../components/Section.svelte';
	import ProjectPage from '../../components/projects/ProjectPage.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<ProjectPage>
	<Section title="Contact">
		<Card color="bg-orange-100">Your message has been sent successfully.</Card>
	</Section>
</ProjectPage>
