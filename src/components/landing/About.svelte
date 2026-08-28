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
	<div class="grid gap-2">
		<Card color="bg-orange-100">
			<div class="">
				<p class="mb-3">
					Hey, I am Bennett. I am passionate about web development and
					<span class={textHighlight}>solving fun technical challenges</span>, combining modern
					technical capabilities in new ways.
				</p>
				<p class="mb-3">
					I love to <span class={textHighlight}>explore new technologies and trends</span> and apply
					them to my projects. Currently I'm passionate about
					<span class={textHighlight}>applying AI</span>
					in ways that go beyond just putting a chatbot on a website.
				</p>
				<p class="mb-3">
					In my current role as a fullstack web developer at{' '}
					<a href="https://smarketer.de" class="underline" target="_blank" rel="noreferrer">
						Smarketer</a
					>, I have the chance to bring this philosophy to life and{' '}
					<span class={textHighlight}>
						create websites that integrate new technologies deeply
					</span>
					to help employees and external customers manager their Google Ads spending. Previously I completed
					my
					<span class={textHighlight}> master's degree </span>in applied computer science at HTW
					Berlin.
				</p>
			</div>
		</Card>

		<Card color="bg-orange-100">
			<div class="flex gap-12 items-center justify-center h-full">
				<h2 class="font-bold text-lg ">Connect with me</h2>
				<a href="https://github.com/vantezzen/">
					<img src={githubIcon} alt="Github" class="w-6 h-6" />
				</a>
				<a href="https://www.linkedin.com/in/bennett-h/">
					<img src={linkedinIcon} alt="LinkedIn" class="w-6 h-6" />
				</a>
				<a href="https://twitter.com/vantezzen/">
					<img src={twitterIcon} alt="Twitter" class="w-6 h-6" />
				</a>
			</div>
		</Card>
	</div>
</Section>
