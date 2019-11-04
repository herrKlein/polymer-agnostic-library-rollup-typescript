// import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: ['src/index.ts'],
	output: {
		file: 'build/index.js',
		format: 'es',
		sourcemap: true
	},
	plugins: [
    // resolve(),
    typescript()
  ]
};