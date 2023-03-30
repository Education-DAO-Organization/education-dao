import React from 'react'

import styled from 'styled-components'

import { JS_SNIPPET } from './snippets/javascript'
import { SOL_SNIPPET } from './snippets/solidity'

import CodeBlock from '../components/molecules/CodeBlock'

export default {
  title: 'Molecules/Code Block',
  component: CodeBlock
}

const Wrap = styled.div`
  width: 900px;
	min-width: fit-content;
  ${'' /* margin: 0 auto; */}
`

const Template = (args) => <CodeBlock {...args} />

const Js = Template.bind({})
Js.args = {
  children: JS_SNIPPET,
  language: 'javascript'
}

const Solidity = Template.bind({})
Solidity.args = {
  children: SOL_SNIPPET,
  language: 'solidity'
}

const keyword = [
	{
		code: `for (const foo of bar) {
	if (foo === 'foobar') break;
		await foo;
	}`,
		language: 'javascript'
	}
]

const builtin = {
	code: 'pi = round(float(\'3.14159\'), 2)',
	language: 'python'
}

const KeywordJS = Template.bind({})
KeywordJS.args = {
	children: keyword[0].code,
	language: 'javascript',
}

const BuiltinPython = Template.bind({})
BuiltinPython.args = {
	children: builtin.code,
	language: 'python'
}


export const Keyword = () => {
	return (
		<Wrap>
			<KeywordJS {...KeywordJS.args} />
		</Wrap>
	)
}

export const Builtin = () => {
	return (
		<Wrap>
			<BuiltinPython {...BuiltinPython.args} />
		</Wrap>
	)
}

export const JavascriptBlock = () => {
  return (
    <Wrap>
      <Js {...Js.args}/>
    </Wrap>
  )
}


export const SolidityBlock = () => {
  return (
    <Wrap>
      <Solidity {...Solidity.args} />
    </Wrap>
  )
}
