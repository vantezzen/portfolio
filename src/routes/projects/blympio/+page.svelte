<script>
	import blympioImage from '$lib/images/blympio.png?webp&w=1000&imagetools';
	import Button from '../../../components/Button.svelte';
	import ProjectHeader from '../../../components/projects/ProjectHeader.svelte';
	import ProjectPage from '../../../components/projects/ProjectPage.svelte';
	import Section from '../../../components/Section.svelte';
</script>

<svelte:head>
	<title>blymp.io - Bennett Hollstein</title>
	<meta name="description" content="Crafting powerful websites and web applications" />
</svelte:head>

<ProjectPage>
	<ProjectHeader title="blymp.io" image={blympioImage} color="#f5f2f9" />

	<Section title="About">
		<p>
			I always enjoyed the ease-of-use of Apple's AirDrop, however, most of the time, I am not
			transferring files between Apple devices.<br />
			That was my motivation to create blymp.io. The service is a simple website that you can use to
			directly <span class="text-orange-500 font-bold">transfer files between devices</span> using a
			simple 4-digit code.
		</p>
		<p class="mt-2">
			blymp tries to use the <span class="text-orange-500 font-bold">fastest transfer speeds</span>
			possible.<br />
			In order to do this, blymp tries to establish a
			<span class="text-orange-500 font-bold">Peer-to-Peer</span>
			connection using WebRTC with which files can be transferred without the need of a server.<br
			/>
		</p>
	</Section>

	<Section title="Lessons learned">
		<p>
			blymp.io is my first project, in which I used a Peer-to-Peer connection to connect devices and
			in which I used the JavaScript FileReader API to slowly read files in chunks.<br />
			It was very interesting to develop this webapp in a way that doesn't rely on a central server when
			transferring files using WebRTC but instead directly establishing a protocol between individual
			users.
		</p>
	</Section>

	<Section title="Build with"
		>Build with ReactJS, WebSockets, WebRTC and the JavaScript File API.</Section
	>

	<Section title="Visit">
		<div class="flex gap-3">
			<a href="https://blymp.io/" target="_blank" rel="noreferrer">
				<Button highlighted>Visit project site</Button>
			</a>
			<a href="https://github.com/vantezzen/blymp-io" target="_blank" rel="noreferrer">
				<Button>View source</Button>
			</a>
		</div>
	</Section>
</ProjectPage>
