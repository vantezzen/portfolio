<script>
	import Button from '../Button.svelte';
	import Card from '../Card.svelte';
	import CardGrid from '../CardGrid.svelte';
	import Input from '../Input.svelte';
	import Section from '../Section.svelte';
	import Textarea from '../Textarea.svelte';
</script>

<Section title="Contact">
	<Card color="bg-orange-100">
		<form name="contact" method="POST" data-netlify="true" action="/success" data-netlify-recaptcha="true">
			<div class="grid gap-4">
				<div class="text-zinc-500 font-medium">
					For bug reports and feature requests please instead use GitHub issues on the respective
					repository - reporting these here will be ignored. Thank you!
				</div>
				<Input label="Email" name="email" />
				<Input label="Name" name="name" />
				<Textarea label="Message" name="message" />
				<input type="hidden" name="form-name" value="contact" />
				<div data-netlify-recaptcha="true"></div>

				<Button type="submit" highlighted>Send</Button>
			</div>
		</form>
	</Card>
</Section>
