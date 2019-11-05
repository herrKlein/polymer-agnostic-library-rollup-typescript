// import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  // If using any exports from a symlinked project, uncomment the following:
  // preserveSymlinks: true,
	input: ['src/index.ts'],
	output: {
		file: 'dist/index.js',
		format: 'es',
		sourcemap: false
	},
	plugins: [
		typescript()	// compiles files from typescript to js
  ]
};