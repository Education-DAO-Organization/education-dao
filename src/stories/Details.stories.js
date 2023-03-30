import React from 'react'

import Details from '../components/molecules/Details'

export default {
  title: 'Molecules/Details',
  component: Details,
  argTypes: {
    header: { description: 'The string found inside the summary element' },
    content: {
      description:
        'The content found outside of the summary element but in the details element.',
    },
  },
}

export const Detail = (args) => <Details {...args} />

Detail.args = {
  header: 'Summary Header',
  content: 'Summary Details',
}
