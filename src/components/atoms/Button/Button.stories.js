import React from 'react'

import Button from './index.js'

export default {
	title: 'Atoms/Button',
	component: Button,
	argTypes: {
		icon: { description: 'The tiny icon that\'ll sit before the text' },
		label: { description: 'Button text'},
		variant: { description: 'If the button is for a primary, secondary, or tertiary action.' },
		isDisabled: { description: 'Is an action currently taking place, or does the user not have the ability to click?' }
	}
}

const Template = args => <Button {...args} />

export const Regular = Template.bind({})
Regular.args = {
	icon: 'metamask',
	label: 'Connect Wallet',
	handleClick: console.log('o hi, didn\'t see you there'),
	variant: 'primary',
	type: 'regular'
}

export const Destructive = Template.bind({})
Destructive.args = {
	label: 'Connect Wallet',
	handleClick: console.log('o hi, didn\'t see you there'),
	variant: 'primary',
	type: 'destructive'
}
