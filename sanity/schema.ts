import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './product'
import { productVariantType } from './productVariant'
import { sizeType } from './size'
import { albumType } from './album'
import { reviewType } from './review'
import { userType } from './user'
import { accountType } from './account'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    productVariantType,
    sizeType,
    albumType, 
    reviewType,
    userType,
    accountType
  ],
}
