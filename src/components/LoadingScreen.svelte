<script>
	import { loading } from '$lib/loading';
	import logo from '$lib/images/logo.svg';
	import { fade } from 'svelte/transition';
</script>

{#if $loading}
	<div class="loading-screen" transition:fade={{ duration: 300 }}>
		<img class="w-auto h-16 mx-auto" src={logo} alt="Logo" />

		<div class="loading-bar">
			<div class="loading-bar__bar" />
		</div>
	</div>
{/if}

<style>
	.loading-screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1.5rem;
	}

	.loading-bar {
		width: 100px;
		height: 4px;
		background-color: #ebebeb;
		border-radius: 2px;
		margin-top: 1rem;
	}

	.loading-bar__bar {
		width: 100px;
		height: 100%;
		background-color: #212121;
		border-radius: 2px;
		animation: loading 1s linear;
	}

	@keyframes loading {
		from {
			width: 0;
		}
		60% {
			width: 80px;
		}
		to {
			width: 100px;
		}
	}
</style>
