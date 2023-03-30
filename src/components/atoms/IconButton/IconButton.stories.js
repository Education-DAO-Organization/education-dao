import React from 'react'

import styled from 'styled-components'

import discord from '../../../assets/logos/discord.svg'
import github from '../../../assets/logos/github.svg'
import linkedin from '../../../assets/logos/linkedin.svg'
import medium from '../../../assets/logos/medium.svg'
import twitter from '../../../assets/logos/twitter.svg'
import IconButton from '../../../components/atoms/IconButton'

export default {
  title: 'Atoms/Icon Button',
  component: IconButton,
  argTypes: {
    type: {
      description: 'Will it be a clickable icon to a link, or will it call a function?',
      options: ['link', 'function'],
      control: { type: 'inline-radio' }
    }
  }
}

const SocialWrap = styled.div`
  width: fit-content;
  margin: 1em auto 0;
`

const Template = (args) => <IconButton {...args} />


const Github = Template.bind({})
Github.args = {
  type: 'link',
  image: github,
  url: '',
  name: 'Github',
}

const Linkedin = Template.bind({})
Linkedin.args = {
  type: 'link',
  image: linkedin,
  url: '',
  name: 'LinkedIn',
}

const Medium = Template.bind({})
Medium.args = {
  type: 'link',
  image: medium,
  url: '',
  name: 'Medium',
}

const Twitter = Template.bind({})
Twitter.args = {
  type: 'link',
  image: twitter,
  url: '',
  name: 'Twitter',
}

export const Default = () => {
  return (
		<>
			<p>Icon Buttons as links</p>
			<SocialWrap>
				<Discord {...Discord.args} />
				<Github {...Github.args} />
				<Linkedin {...Linkedin.args} />
				<Medium {...Medium.args} />
				<Twitter {...Twitter.args} />
			</SocialWrap>
		</>
  )
}

export const Discord = Template.bind({})
Discord.args = {
  type: 'link',
  image: discord,
  url: '',
  name: 'Discord',
}
