<script>
	import powImage from '$lib/images/pow.svg';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>pow - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader preTitle="Technical project" title="pow" image={powImage} color="#212121" />

	<Section title="About">
		<p>
			<code>pow</code> is a simple
			<span class="text-orange-500 font-bold">Proof-of-Work implementation for web apps</span>. It
			is designed to abstract away the complexity of Proof-of-Work and provide a simple interface to
			use it in web apps to verify users and prevent spam.
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			<code>pow</code> was a fun project to dive more into cryptographically securing applications
			and to learn more about Proof-of-Work. I learned a lot about the
			<span class="text-orange-500 font-bold">WebCrypto API</span> and how to reliably verify cryptographic
			proofs.
		</p>
	</Section>

	<Section title="Build with">Build with TypeScript.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://npmjs.com/package/@vantezzen/pow/" target="_blank" rel="noreferrer">
				<Button highlighted>Visit npm</Button>
			</a>
			<a href="https://vantezzen.github.io/pow/" target="_blank" rel="noreferrer">
				<Button>View browser demo</Button>
			</a>
			<a href="https://github.com/vantezzen/pow" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
