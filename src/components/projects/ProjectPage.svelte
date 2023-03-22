<script>
	import chevronLeftIcon from 'feather-icons/dist/icons/chevron-left.svg';
</script>

<a href="/" class="text-zinc-600 flex items-center gap-2 text-sm font-bold">
	<img src={chevronLeftIcon} alt="Go back" class="h-5" />
	Go back
</a>

<div class="project-page px-24 py-12 flex flex-col gap-4">
	<slot />
</div>
