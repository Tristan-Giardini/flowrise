import { getComponents } from "@/sanity/sanity-utils";
import { Component } from "@/types/component";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default async function Home() {
  const components = await getComponents()

  console.log(components)

  return (
    <main>
      <div>
        {components.map((component: Component) => (
          <>
          <div className={`flex ${component.layout}`}>
            <div>
              {component.layout}
            <PortableText value={component.heading}/>
            <PortableText value={component.subheading}/>
            </div>
            <div>
            <Image src={component.image} alt={component.name} width={600} height={300}></Image>
            </div>
          </div>
          </>
        ))}
      </div>
    </main>
  );
}
