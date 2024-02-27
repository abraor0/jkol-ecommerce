import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import { productVariantType } from './productVariant'
import { sizeType } from './size'
import { albumType } from './album'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    productVariantType,
    sizeType,
    albumType
  ],
}
