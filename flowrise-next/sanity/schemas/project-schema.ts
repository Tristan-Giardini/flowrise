const component = {
    name: 'component',
    title: 'Components',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        // {
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'slug',
        //     options: {source: 'name'}
        // },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                name: 'alt',
                title: 'Alt',
                type: 'string'
            }
            ]
        },
        // {
        //     name: 'url',
        //     title: 'URL',
        //     type: 'url'
        // },
        {
            name: 'heading',
            title: 'Heading',
            type: 'array',
            of: [{ type: "block"}]
        },
        {
            name: 'subheading',
            title: 'Sub-heading',
            type: 'array',
            of: [{ type: "block"}]
        },
        {
            name: 'layout',
            title: 'Layout',
            type: 'string',
            initialValue: {
                title: 'Image Bottom'
            },
            options: {
              list: [
                { title: 'Image Top', value: 'flex-col-reverse' },
                { title: 'Image Bottom', value: 'flex-col' },
                { title: 'Image Right', value: 'flex-row' },
                { title: 'Image Left', value: 'flex-row-reverse' }
              ],
            }
        },
        {
            name: 'button',
            title: 'Button Copy',
            type: 'array',
            of: [{ type: "block"}]
        },
    ]
}

export default component;