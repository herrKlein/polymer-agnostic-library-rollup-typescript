// import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import resolve from 'rollup-plugin-node-resolve';

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
		resolve(),		// resolves absolute paths to node_modules folder
		serve(),		// index.html should be in root of project
		livereload(),	// watches files and reloads server
		typescript()	// compiles files from typescript to js
  ]
};