import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Gopesh',

  projectId: '8cxveae5',
  dataset: 'production',

  plugins: [deskTool(), visionTool()], 

  schema: {
    types: schemaTypes,
  },
})
