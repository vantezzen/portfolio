<script>
	export let href = '';
</script>

<a
	{href}
	class="inline-flex font-medium text-gray-900 transition-all duration-200 transform font-pj hover:text-gray-600"
>
	<slot />
</a>
