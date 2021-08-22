export default {
    name: 'wildlife',
    title: 'Wildlife',
    type: 'document',
    fields: [
        {
            name: 'wildlifeImage',
            title: 'Wildlife Image',
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
            description: 'important for SEO, example: Puffin',
        },

    ]
}