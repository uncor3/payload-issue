import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { customGetComments } from './endpoints'
export const Comments: CollectionConfig = {
  slug: 'comments',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'content',
      type: 'text',
      required: true,
    },
  ],
  endpoints: [customGetComments],
  timestamps: true,
}
