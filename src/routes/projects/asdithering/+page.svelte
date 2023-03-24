<script>
	import asditheringImage from '$lib/images/asdithering.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>asdithering - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader
		preTitle="Technical project"
		title="asdithering"
		image={asditheringImage}
		color="#2A2A2A"
	/>

	<Section title="About">
		<p>
			Dithering allows displaying images in a higher visual quality using a limited color palette.<br
			/>
			asdithering is an implementation of quantization, random and Bayer monochromatic
			<span class="text-orange-500 font-bold">dithering in AssemblyScript</span>.
		</p>
		<p class="mt-2">
			The project can use the different dithering methods to reduce the input image into an output
			image that only uses pure black (#000000) and white (#FFFFFF). This is mainly a test project
			in using <span class="text-orange-500 font-bold">WASM and AssemlyScript</span> for image processing.
		</p>
	</Section>

	<Section title="Build with">Build with AssemblyScript.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://vantezzen.github.io/asdithering/" target="_blank" rel="noreferrer">
				<Button highlighted>Visit project site</Button>
			</a>
			<a href="https://github.com/vantezzen/asdithering" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
