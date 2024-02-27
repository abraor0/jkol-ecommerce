import { defineField, defineType } from "sanity";

export const sizeType = defineType({
  name: 'size',
  title: 'Size',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Size Name',
      type: 'string',
      validation: rule => rule.required().min(1)
    }),
    defineField({
      name: 'type',
      title: 'Size Type',
      type: 'string',
      options: {
        list: [
          {title: 'Shoes', value: 'shoe'},
          {title: 'Apparel', value: 'apparel'}
        ]
      }
    })
  ]
});