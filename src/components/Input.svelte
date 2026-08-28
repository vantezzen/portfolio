<script lang="ts">
	interface Props {
		label?: string;
		name?: string;
		value?: string;
	}

	let { label = '', name = '', value = $bindable('') }: Props = $props();
</script>

<label class="grid gap-2">
	<span class="text-gray-700 font-medium"
		>{label}
		<span class="text-fire-400">*</span>
	</span>
	<input
		class="w-full rounded-md border-gray-300 shadow-xs focus:border-fire-500 focus:ring-3 focus:ring-fire-500/50 focus:outline-hidden p-2"
		bind:value
		required
		{name}
	/>
</label>
