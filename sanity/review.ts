import { defineField, defineType } from "sanity";

export const reviewType = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  initialValue: () => {
    return {
      createdAt: new Date().toISOString(),
    }
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required().min(4),
    }),
    defineField({
      name: 'reviewBody',
      title: 'Review Body',
      type: 'text',
      validation: rule => rule.required().min(10),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [
          {value: 0, title: '0'},
          {value: 0.5, title: '0.5'},
          {value: 1, title: '1'},
          {value: 1.5, title: '1.5'},
          {value: 2, title: '2'},
          {value: 2.5, title: '2.5'},
          {value: 3, title: '3'},
          {value: 3.5, title: '3.5'},
          {value: 4, title: '4'},
          {value: 4.5, title: '4.5'},
          {value: 5, title: '5'},
        ]
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      hidden: true,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [
        {type: 'user'}
      ],
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [
        {type: 'product'}
      ],
      validation: rule => rule.required(),
    }),
  ]
});