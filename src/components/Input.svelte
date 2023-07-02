<script lang="ts">
	export let label = '';
	export let name = '';
	export let value = '';
</script>

<label class="grid gap-2">
	<span class="text-gray-700 font-medium"
		>{label}
		<span class="text-fire-400">*</span>
	</span>
	<input
		class="w-full rounded-md border-gray-300 shadow-sm focus:border-fire-500 focus:ring focus:ring-fire-500 focus:ring-opacity-50 focus:outline-none p-2"
		bind:value
		required
		{name}
	/>
</label>
