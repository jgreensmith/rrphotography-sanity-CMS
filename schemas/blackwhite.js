export default {
    name: 'blackwhite',
    title: 'Black and White',
    type: 'document',
    fields: [
        {
            name: 'blackwhiteImage',
            title: 'Black and White Image',
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
            description: 'important for SEO, example: Dog',
        },

    ]
}