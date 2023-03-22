<script>
	import logo from '$lib/images/logo.svg';

	import FooterLink from './FooterLink.svelte';
</script>

<footer class="py-12 bg-white sm:py-16 lg:py-20">
	<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
		<img class="w-auto h-8 mx-auto" src={logo} alt="Logo" />
		<ul class="flex flex-wrap items-center justify-center space-x-12 md:space-x-16 mt-14">
			<li>
				<FooterLink href="/">Home</FooterLink>
			</li>
			<li>
				<FooterLink href="/legal/impressum">Impressum</FooterLink>
			</li>
			<li>
				<FooterLink href="/legal/privacy">Datenschutzerklärung</FooterLink>
			</li>
		</ul>
		<p class="text-base font-normal text-center text-gray-600 mt-7 font-pj">
			© Copyright {new Date().getFullYear()}, All Rights Reserved
		</p>
	</div>
</footer>
