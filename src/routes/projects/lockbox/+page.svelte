<script>
	import lockboxImage from '$lib/images/lockbox.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>LockBox - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="LockBox" image={lockboxImage} color="#ffffff" />

	<Section title="About">
		<p>
			LockBox is a secure, <span class="text-orange-500 font-bold"
				>end-to-end encrypted secret sharing service</span
			>. It allows sharing secrets with other people, without having to worry about your data being
			compromised.
		</p>
		<p class="mt-2">
			When sharing a secret, the data is encrypted directly on-device. The encrypted data is then
			securely stored on our server. The recipient can access the secret by entering the password
			and decrypting the data on their device. After the secret has been decrypted, it is deleted
			from the server and can no longer be accessed.
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			LockBox was an interesing project to learn more about <span class="text-orange-500 font-bold"
				>encryption in the browser</span
			>. The encryption is done using the WebCrypto API and an optional polyfill for older browsers.
		</p>
		<p class="mt-2">
			The goal was to create an encryption that is effective even with a compromised database or
			download link. To improve preventing brute-force, the encryption password is derived from
			hashing the user's password numerous times. This requires modern hardware and browsers 3-5
			seconds to decrypt the secret, but makes brute-force attacks more infeasible.
		</p>
	</Section>

	<Section title="Build with">Build with NextJS, WebCrypto and Redis.</Section>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://lockbox.vantezzen.io/" target="_blank" rel="noreferrer">
				<Button highlighted>Visit LockBox</Button>
			</a>
			<a href="https://github.com/vantezzen/lockbox" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
