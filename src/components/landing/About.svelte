<script>
	import githubIcon from 'feather-icons/dist/icons/github.svg';
	import linkedinIcon from 'feather-icons/dist/icons/linkedin.svg';
	import twitterIcon from 'feather-icons/dist/icons/twitter.svg';

	import Card from '../Card.svelte';
	import CardGrid from '../CardGrid.svelte';
	import Section from '../Section.svelte';

	let textHighlight = 'text-orange-600 font-bold';
</script>

<Section title="About">
	<CardGrid>
		<Card color="bg-orange-100" size={6}>
			<div class="">
				<p class="mb-3">
					Web applications allow us to access{' '}
					<span class={textHighlight}> powerful tools and information </span>{' '}
					on any device and without the need for installation.
				</p>
				<p class="mb-3">
					As a web developer, I have the opportunity to create{' '}
					<span class={textHighlight}>powerful and easy-to-use</span>{' '}
					websites and web applications that not only look great, but also provide value and functionality.
					I believe that a great web design{' '}
					<span class={textHighlight}>goes beyond just aesthetics</span>, but also considers the
					needs and goals of the users.
				</p>
				<p class="mb-3">
					In my current role as a web developer and project manager at{' '}
					<a href="https://smarketer.de" class="underline" target="_blank" rel="noreferrer">
						Smarketer
					</a>
					, I have the chance to bring this philosophy to life and{' '}
					<span class={textHighlight}> create websites that make a meaningful impact </span>
					. With a bachelor degree in applied computer science from HTW Berlin, I have the skills and
					knowledge to turn my ideas into reality and contribute to the constantly evolving field of
					web development. Additionally, I am currently studying{' '}
					<span class={textHighlight}> International Digital Business </span>{' '}
					at HWR Berlin to expand my knowledge of economics and project management.
				</p>
			</div>
		</Card>

		<Card color="bg-orange-100" size={2}>
			<div class="flex gap-12 flex-col items-center justify-center h-full">
				<h2 class="font-bold text-lg ">Connect with me</h2>
				<a href="https://github.com/vantezzen/">
					<img src={githubIcon} alt="Github" class="w-8 h-8" />
				</a>
				<a href="https://www.linkedin.com/in/bennett-h/">
					<img src={linkedinIcon} alt="LinkedIn" class="w-8 h-8" />
				</a>
				<a href="https://twitter.com/vantezzen/">
					<img src={twitterIcon} alt="Twitter" class="w-8 h-8" />
				</a>
			</div>
		</Card>
	</CardGrid>
</Section>
