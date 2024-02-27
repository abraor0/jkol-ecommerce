import { defineField, defineType } from "sanity";

export const albumType = defineType({
  name: 'album',
  title: 'Product Images',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {type: 'image', }
      ],
      validation: rule => rule.required(),
    })
  ],
});