import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'UCADocs',
			social: {
				github: 'https://github.com/EloyChavezDev/DocUCA',
			},
			sidebar: [
				{
					label: 'Año 2024',
					autogenerate: { directory: '2024' },
				},
			],
		}),
	],
});
