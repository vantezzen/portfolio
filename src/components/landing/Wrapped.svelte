<script>
	import Button from '../Button.svelte';
	import Card from '../Card.svelte';
	import Section from '../Section.svelte';
</script>

<Section title="Wrapped">
	<Card color="bg-orange-100" size={6}>
		<div class="">
			<p class="mb-3 font-extrabold text-2xl">Looking for Wrapped for TikTok?</p>
			<p class="mb-3">
				If you're looking for Wrapped for TikTok, you can find it at <a
					href="https://wrapped.vantezzen.io"
					class="underline">wrapped.vantezzen.io</a
				>.
			</p>

			<a href="https://wrapped.vantezzen.io">
				<Button highlighted>Go to Wrapped for TikTok</Button>
			</a>
		</div>
	</Card>
</Section>
