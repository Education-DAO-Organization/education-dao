import React from 'react'

import styled from 'styled-components'

import Badge from './index.js'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: { type: {

	} }
}

const Template = (args) => <Badge {...args} />

export const Purple = Template.bind({})
Purple.args = {
	label: 'Label'
}
