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
            name: 'alt',
            type: 'string',
            title: 'Caption',
            description: 'tell us about your piccy!',
        },

    ]
}