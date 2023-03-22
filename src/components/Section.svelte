<script>
	export let title = '';
</script>

<div class="flex gap-4 p-3">
	<div>
		<div class="sticky top-5 flex flex-col items-center gap-4">
			<div class="w-1/2 h-1 bg-zinc-600" />
			<h2 class="text-2xl font-bold section-title">{title}</h2>
		</div>
	</div>

	<div class="flex-1">
		<slot />
	</div>
</div>

<style>
	.section-title {
		writing-mode: vertical-lr;
	}
</style>
