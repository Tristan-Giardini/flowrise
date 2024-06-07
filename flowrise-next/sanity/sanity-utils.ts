import { Component } from './../types/component';
import { createClient, groq } from 'next-sanity';
import config from '@/sanity-config';

export async function getComponents(): Promise<Component[]> {
    const client = createClient({
        projectId: 'k19431jw',
        dataset: 'production',
        apiVersion: "2024-06-07",
    })

    return client.fetch(
        groq`*[_type == "component"]{
        _id,
        _createdAt,
        name,
        "image": image.asset->url,
        heading,
        subheading,
        layout,
        button
        }`
    )
}