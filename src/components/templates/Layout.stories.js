import React from 'react'

import Layout from './Layout'

import Card from '../molecules/Card'
import Hero from '../molecules/Hero'
import Editor from '../organisms/Editor'
import Markdown from '../organisms/Markdown'
import Terminal from '../organisms/Terminal'


const block = `# Simple Bank Exercise

SimpleBank is a [Truffle](https://www.trufflesuite.com/) project that contains a starter contract, [migration](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations#migration-files) and [Truffle JavaScript test files](https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript).

In this exercise you are going to implement the \`SimpleBank.sol\` contract.`

export default {
  title: 'Template/Layout',
  component: Layout,
  argTypes: {
    page: {
      otpions: ['workspace', 'lesson', 'profile'],
      control: { type: 'radio' }
    },
    children: {
      control: false
    }
  }
}

const Template = (args) => <Layout {...args} />

export const Workspace = Template.bind({})
Workspace.args = {
  page: 'workspace',
  children: (
    <>
      <Markdown block={block} />
      <Editor />
      <Terminal />
    </>
  )
}

export const Lesson = Template.bind({})
Lesson.args = {
  page: 'lesson',
  children: (
    <>
      <Hero />
      <Card path='/'></Card>
    </>
  )
}
