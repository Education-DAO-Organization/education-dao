import React from 'react'

import Tooltip from './index'

export default {
  title: 'Atoms/Tool Tip',
  component: Tooltip,
  argTypes: {
    content: { description: 'Should be text wrapped in html' }
  }
}

const content = <p>Now you see me</p>

export const Default = (args) => <Tooltip {...args} />

Default.args = { content }
