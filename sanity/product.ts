import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  initialValue: () => {
    return {
      releasedAt: new Date().toISOString
    }
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: rule => rule.required().min(5)
    }),
   defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
      validation: rule => rule.required().min(20)
    }),
    defineField({
      name: 'releasedAt',
      title: 'Release Date',
      type: 'datetime',
      hidden: true,  
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      initialValue: 0,
      validation: rule => rule.required().min(0).max(999).precision(2)
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          {title: 'Men', value: 'men'},
          {title: 'Women', value: 'women'},
        ],
        layot: 'radio'
      },
      validation: rule => rule.required(),
    }),
    {
      name: 'sizes',
      title: 'Product Sizes',
      type: 'array',
      of: [
        {
          type: 'reference', to: [
            {type: 'size'}
          ]
        }
      ]
    }
  ]
} satisfies SchemaTypeDefinition);