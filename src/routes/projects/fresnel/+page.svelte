<script>
	import fresnelImage from '$lib/images/fresnel.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>Fresnel - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="fresnel" image={fresnelImage} color="#271021" />

	<Section title="About">
		<p>
			Fresnel is a macOS app that uses CoreML on the Neural Engine to <span
				class="text-orange-500 font-bold">relight the live camera feed</span
			>
			using virtual lights. The idea is based on a
			<a
				href="https://x.com/reczko_konrad/status/2089670934009413751"
				target="_blank"
				rel="noreferrer"
				class="text-orange-500 font-bold underline"
			>
				WebGPU demo by Konrad Reczko
			</a> and rewritten as a native macOS app using SwiftUI and CoreML.
		</p>
		<p class="mt-2">
			The app runs <span class="text-orange-500 font-bold">Depth Anything V2 (small/fp16)</span>
			using CoreML, then uses a custom <span class="text-orange-500 font-bold">Metal shader</span> to
			relight the image based on the depth map and virtual lights.
		</p>
	</Section>

	<iframe
		width="560"
		height="315"
		src="https://www.youtube-nocookie.com/embed/25EpROat7i8?si=q2oZSV5tRZD5xxYT"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
		class="mt-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 mx-auto"
	/>

	<Section title="Lessons learned">
		<p>
			This was my <span class="text-orange-500 font-bold">first native SwiftUI macOS app</span>, and
			I learned a lot about the SwiftUI framework, CoreML, and how to use the Neural Engine for
			real-time processing.
		</p>
		<p class="mt-2">
			Especially integrating with the virtual camera kernel extension, optimizing the CoreML model
			for real-time performance, and handling the relight via a Metal shader were all challenging
			but rewarding experiences.
		</p>
	</Section>

	<Section title="Build with">Build with SwiftUI, CoreML, Metal, and Xcode.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a
				href="https://apps.apple.com/app/fresnel-ai-camera-relighting/id6804679706?mt=12"
				target="_blank"
				rel="noreferrer"
			>
				<Button highlighted>Visit App Store</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
