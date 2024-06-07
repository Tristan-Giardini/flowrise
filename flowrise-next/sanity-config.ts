import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
    title: 'Flowrise',
    projectId: 'k19431jw',
    dataset: 'production',
    apiVersion: "2024-06-07",
    basePath: "/admin",
    plugins: [structureTool()]
})

export default config;