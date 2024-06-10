import { getComponents } from "@/sanity/sanity-utils";
import { Component } from "@/types/component";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default async function Home() {
  const components = await getComponents()

  return (
      <div className="">
        {components.map((component: Component) => (
          <>
          <div className={`flex ${component.layout} gap-12 content-center items-center`}>
            <div className={`flex flex-col ${component.copy === 'text-center' ? 'items-center' : component.copy === 'text-left' ? 'items-start' : component.copy === 'text-right' ? 'items-end' : ''} content-center gap-8 w-2/4`}>
              <div className={`text-3xl ${component.copy}`}>
              <PortableText value={component.heading}/>
              </div>
              <div className={`text-xl ${component.copy} w-8/12`}>
              <PortableText value={component.subheading}/>
              </div>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:cursor-pointer">
              <PortableText value={component.button}/>
              </div>
            </div>
            <div className="flex content-center items-center">
            <Image src={component.image} alt={component.name} width={600} height={300}></Image>
            </div>
          </div>
          </>
        ))}
      </div>
  );
}

export const dynamic = 'force-dynamic';
export const revalidate = 10;
