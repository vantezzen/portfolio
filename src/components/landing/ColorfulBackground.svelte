<script lang="ts">
	import { loading, startLoading } from '$lib/loading';
	import { onMount } from 'svelte';

	startLoading();

	const canvasWidth = 32;
	const canvasHeight = 32;

	let ctx: CanvasRenderingContext2D | null = null;
	let canvas: HTMLCanvasElement | null = null;

	let t = 5;

	const SPEED = 0.01;
	const BASE_BRIGHTNESS = 100;
	const MAX_BRIGHTNESS = 230;
	const RED_BIAS = 0.7;
	const BRIGHTNESS_DELTA = MAX_BRIGHTNESS - BASE_BRIGHTNESS;

	const R = function (x: number, y: number, t: number) {
		return Math.floor(BASE_BRIGHTNESS + BRIGHTNESS_DELTA * Math.cos((x * x - y * y) / 300 + t));
	};

	const G = function (x: number, y: number, t: number) {
		return Math.floor(
			BASE_BRIGHTNESS * RED_BIAS +
				BRIGHTNESS_DELTA * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
		);
	};

	const B = function (x: number, y: number, t: number) {
		return Math.floor(
			BASE_BRIGHTNESS * RED_BIAS +
				BRIGHTNESS_DELTA *
					Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)
		);
	};

	const drawCanvas = () => {
		// We only need to update the canvas when the canvas is actually in the view
		// Otherwise just skip drawing
		if (window.scrollY > 300) {
			setTimeout(drawCanvas, 100);
			return;
		}

		if (ctx) {
			for (let x = 0; x <= canvasWidth; x++) {
				for (let y = 0; y <= canvasHeight; y++) {
					const r = R(x, y, t);
					const g = G(x, y, t);
					const b = B(x, y, t);

					ctx.fillStyle = `rgb(${r},${g},${b})`;
					ctx.fillRect(x, y, 1, 1);
				}
			}
			t += SPEED;
		}

		requestAnimationFrame(drawCanvas);
	};

	onMount(() => {
		if (!canvas) return;

		canvas.width = canvasWidth;
		canvas.height = canvasHeight;
		ctx = canvas.getContext('2d');

		loading.set(false);

		requestAnimationFrame(drawCanvas);
	});
</script>

<canvas bind:this={canvas} />

<style>
	canvas {
		width: 100%;
		height: 100%;
	}
</style>
