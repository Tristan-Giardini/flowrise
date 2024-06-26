import { getPage } from "@/sanity/sanity-utils"
import { PortableText, PortableTextBlock } from "next-sanity"

type Props = {
    params: {slug: string}
}

export default async function Page({ params }: Props){
    const page = await getPage(params.slug)

    return (
    <div>
            <PortableText value={page.content} />
    </div>
    )
}