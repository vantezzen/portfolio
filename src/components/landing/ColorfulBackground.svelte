<script lang="ts">
	import P5 from 'p5-svelte';
	import type { Sketch } from 'p5-svelte';
	import { loading, startLoading } from '$lib/loading';

	startLoading();

	let ctx: CanvasRenderingContext2D | null = null;

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

	const sketch: Sketch = (p5) => {
		p5.setup = () => {
			const cnv = p5.createCanvas(32, 32);
			cnv.style('width', '100%');
			cnv.style('height', '100%');
			cnv.attribute('width', '32');
			cnv.attribute('height', '32');

			ctx = cnv.elt.getContext('2d');
			loading.set(false);
		};

		p5.draw = () => {
			// We only need to update the canvas when the canvas is actually in the view
			// Otherwise just skip drawing
			if (window.scrollY > 300) return;

			for (let x = 0; x <= 35; x++) {
				for (let y = 0; y <= 35; y++) {
					if (ctx) {
						// p5's rendering Engine will mess with the rendering of the colors
						// so we need to directly access the canvas instead
						const r = R(x, y, t);
						const g = G(x, y, t);
						const b = B(x, y, t);

						ctx.fillStyle = `rgb(${r},${g},${b})`;
						ctx.fillRect(x, y, 1, 1);
					}
				}
			}
			t += SPEED;
		};
	};
</script>

<P5 {sketch} />
