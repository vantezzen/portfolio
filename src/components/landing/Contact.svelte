<script>
	import { onMount } from 'svelte';
	import Button from '../Button.svelte';
	import Card from '../Card.svelte';
	import Input from '../Input.svelte';
	import Section from '../Section.svelte';
	import Textarea from '../Textarea.svelte';

	const sitekey = '6Le2OPUmAAAAAHL1_Fo5UOe06nuy4zDKA-4DNSDr';

	onMount(async () => {
		const script = document.createElement('script');
		script.id = 'googleRecaptchaScript';
		script.src = `https://www.google.com/recaptcha/api.js?render=explicit&sitekey=${sitekey}`;
		script.async = true;
		script.defer = true;
		document.head.appendChild(script);

		window.grecaptcha.ready(() => {
			window.grecaptcha.render('googleRecaptchaDiv', {
				sitekey
			});
		});
	});
</script>

<Section title="Contact">
	<Card color="bg-orange-100">
		<form
			name="contact"
			method="POST"
			data-netlify="true"
			action="/success"
			data-netlify-recaptcha="true"
		>
			<div class="grid gap-4">
				<div class="text-zinc-500 font-medium">
					For bug reports and feature requests please instead use GitHub issues on the respective
					repository - reporting these here will be ignored. Thank you!
				</div>
				<Input label="Email" name="email" />
				<Input label="Name" name="name" />
				<Textarea label="Message" name="message" />
				<input type="hidden" name="form-name" value="contact" />
				<div id="googleRecaptchaDiv" />

				<Button type="submit" highlighted>Send</Button>
			</div>
		</form>
	</Card>
</Section>
