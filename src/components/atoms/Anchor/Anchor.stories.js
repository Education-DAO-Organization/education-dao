import React from 'react'

import Anchor from './index.js'

export default {
  title: 'Atoms/Anchor',
  component: Anchor,
  argTypes: {
    url: { description: 'URL for the anchor tag' },
    name: { description: 'Title for the link' },
    external: { description: 'Will this link direct users to another site?' },
    children: {
      control: false,
      description: 'Will the anchor tags wrap around another element?',
      table: {
        type: {
          summary: 'element',
          detail: 'If there is no child, the name will be the child.',
        },
      },
    },
  },
}

const Template = (args) => <Anchor {...args} />

export const Internal = Template.bind({})
Internal.args = {
  url: 'https://courses.consensys.net/',
  name: 'Consensys Academy',
}

export const External = Template.bind({})
External.args = {
  url: 'https://courses.consensys.net/',
  external: true,
  name: 'Consensys Academy',
}

// Internal.parameters = {
//   docs: {
//     source: {
//       code: 'Some custom string here',
//     },
//   },
// }
