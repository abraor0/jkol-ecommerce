import { SchemaTypeDefinition, defineField, defineType } from "sanity";

export const productVariantType = defineType({
  name: 'productVariant',
  title: 'A variant of a product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',     
      title: 'Variant Name',
      type: 'string',
      validation: rule => rule.required().min(1) 
    }),
    defineField({
      name: 'album',
      title: 'Variant Images',
      type: 'album'
    }),
    {
      name: 'availableSizes',
      title: 'Available sizes',
      type: 'array',
      of: [{type: 'size'}],
      options: {
        filter: '$product.sizes'
      },
      validation: rule => rule.required()
    }
  ]
} satisfies SchemaTypeDefinition);