export default {
    name: 'cyanotype',
    title: 'Cyanotype',
    type: 'document',
    fields: [
        {
            name: 'cyanotypeImage',
            title: 'Cyanotype Image',
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