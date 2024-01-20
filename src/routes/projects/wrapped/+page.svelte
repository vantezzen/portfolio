<script>
	import wrappedImage from '$lib/images/wrapped.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>Wrapped - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="Wrapped" image={wrappedImage} color="#FFFFFF" />

	<Section title="About">
		<p>
			"Wrapped for TikTok", "Wrapped for Apple Health", "Wrapped for DoorDash" and "Wrapped for
			Instagram" are a series of websites that allow users to <span
				class="text-orange-500 font-bold">generate a "Spotify Wrapped"-like slideshow</span
			> for their other services.
		</p>
		<p class="mt-2">
			Especially "Wrapped for TikTok" has seen a lot of success after multiple TikTok videos
			covering the website went viral, resulting in over 2 million Wrapped generated since launch.
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			With "Wrapped for TikTok" quickly gaining popularity, I've learned a lot about <span
				class="text-orange-500 font-bold">scaling web apps</span
			>. The website is hosted on Vercel, which itself scaled very well, but the amount of users
			quickly exceeded bandwith limits. To help with reducing bandwith usage, a
			<span class="text-orange-500 font-bold">migration to CloudFlare</span> has been done while keeping
			downtime to a few minutes during the migration.
		</p>
	</Section>

	<Section title="Build with">Build with NextJS, TailwindCSS and Spotify Embed API.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://wrapped.vantezzen.io" target="_blank" rel="noreferrer">
				<Button highlighted>Visit Wrapped for TikTok</Button>
			</a>
			<a href="https://github.com/vantezzen/wrapped" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
		<div class="flex gap-3 mt-3">
			<a href="https://health.vantezzen.io" target="_blank" rel="noreferrer">
				<Button highlighted>Visit Wrapped for Apple Health</Button>
			</a>
			<a href="https://github.com/vantezzen/health-wrapped" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
		<div class="flex gap-3 mt-3">
			<a href="https://ig.vantezzen.io" target="_blank" rel="noreferrer">
				<Button highlighted>Visit Wrapped for Instagram</Button>
			</a>
			<a href="https://github.com/vantezzen/ig-wrapped" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
		<div class="flex gap-3 mt-3">
			<a href="https://doordash.vantezzen.io" target="_blank" rel="noreferrer">
				<Button highlighted>Visit Wrapped for DoorDash</Button>
			</a>
			<a href="https://github.com/vantezzen/doordash-wrapped" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
