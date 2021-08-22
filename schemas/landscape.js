export default {
    name: 'landscape',
    title: 'Landscape',
    type: 'document',
    fields: [
        {
            name: 'landscapeImage',
            title: 'Landscape Image',
            type: 'image', 
            options: {
                hotspot: true
            }, 
        },
        {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            description: 'tell us about your piccy!',
        },
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
            description: 'important for SEO, example: Mountain',
        },

    ]
}