import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity';

const config = defineConfig({
    title: 'Flowrise',
    projectId: 'k19431jw',
    dataset: 'production',
    apiVersion: "2024-06-07",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: { types: schemas }
})

export default config;