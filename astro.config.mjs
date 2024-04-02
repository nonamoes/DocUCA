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
					items:[
						{label: 'Resumen', link: '/2024/Resumen/' },
						{
							label: 'Abril',
							autogenerate: { directory: '2024/Abril' },
						}

					]
				},
			],
		}),
	],
});
