<script>
	export let highlighted = false;
</script>

<button
	class={`${
		highlighted
			? 'text-fire-500 bg-fire-900 bg-opacity-10 hover:bg-opacity-20'
			: 'text-fire-500 hover:bg-fire-900 hover:bg-opacity-10'
	}  font-medium rounded-lg py-3 px-6 duration-200 w-full`}
>
	<slot />
</button>
