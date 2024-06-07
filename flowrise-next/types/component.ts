import { PortableTextBlock } from "next-sanity";

export type Component = {
    _id: string;
    _createdAt: Date;
    name: string;
    image: string;
    heading: PortableTextBlock[];
    subheading: PortableTextBlock[];
    layout: string;
    button: PortableTextBlock[];
}