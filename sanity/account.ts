import { defineField, defineType } from "sanity";

export const accountType = defineType(
  {
    name: 'account',
    title: 'Account',
    type: 'document',
    fields: [
      defineField({
        name: 'userId',
        title: 'User',
        type: 'reference',
        to: [
          {type: 'user'}
        ],
        validation: rule => rule.required(),
      }),
      defineField({
        name: 'type',
        title: 'Type',
        type: 'string'
      }),
      defineField({
        name: 'provider',
        title: 'Provider',
        type: 'string'
      }),
    ]
  }
)