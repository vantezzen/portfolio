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
					Hey, I am Bennett. I am passionate about web development and how it can make our lives
					<span class={textHighlight}>easier and more enjoyable</span>.
				</p>
				<p class="mb-3">
					I believe that a great web design{' '}
					<span class={textHighlight}>goes beyond just aesthetics</span>, and also considers the
					needs and goals of the users. I love to explore new technologies and trends and apply them
					to my projects.
				</p>
				<p class="mb-3">
					In my current role as a web developer and project manager at{' '}
					<a href="https://smarketer.de" class="underline" target="_blank" rel="noreferrer">
						Smarketer
					</a>
					, I have the chance to bring this philosophy to life and{' '}
					<span class={textHighlight}> create websites that make a meaningful impact </span>
					. I have a background in applied computer science from my bachelors degree at HTW Berlin and
					I am currently studying
					<span class={textHighlight}> International Digital Business </span> at HWR Berlin to learn
					more about the global aspects of web development and project management.
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
