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
							label: 'Enero',
							collapsed: true,
							autogenerate: { directory: '2024/Enero' },
						},
						{
							label: 'Febrero',
							collapsed: true,
							autogenerate: { directory: '2024/Febrero' },
						},
						{
							label: 'Marzo',
							collapsed: true,
							autogenerate: { directory: '2024/Marzo' },
						},
						{
							label: 'Abril',
							collapsed: true,
							autogenerate: { directory: '2024/Abril' },
						}
					]
				},
			],
		}),
	],
});
