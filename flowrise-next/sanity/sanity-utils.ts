import { Component } from './../types/component';
import { createClient, groq } from 'next-sanity';
import config from '@/sanity-config';
import { Page } from '@/types/page';

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
            copy,
            button
        }`
    );
}

export async function getPages(): Promise<Page[]> {
    const client = createClient({
        projectId: 'k19431jw',
        dataset: 'production',
        apiVersion: "2024-06-07",
    })

    return client.fetch(
        groq`*[_type == "page"]{
        _id,
        createdAt,
        title,
        "slug": slug.current
        }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    const client = createClient({
        projectId: 'k19431jw',
        dataset: 'production',
        apiVersion: "2024-06-07",
    })

    return client.fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        createdAt,
        title,
        "slug": slug.current,
        content
        }`,
        { slug }
    )
}