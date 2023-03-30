import React, { useEffect, useRef } from 'react'

import { lighten } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UseConsole from '../../hooks/UseConsole'
import Prompt from '../atoms/Prompt'
import Output from '../molecules/Output'

const Wrap = styled.div`
  grid-area: terminal;
  background-color: ${lighten(0.05, '#16171d')};
  border-top: 1px solid ${lighten(0.25, '#16171d')};
  box-sizing: border-box;
  padding: 0.5em;
  align-self: end;
  height: 200px;
  overflow: scroll;
  input {
    border: none;
    background-color: transparent;
    outline: none;
    color: #9aa1b2;
    font-family: pt-mono, monospace;
  }
`

const Terminal = () => {
  const [output, onSubmit] = UseConsole()
  const inputText = useRef()
  const scrollRef = useRef()

  useEffect(() => {
    const { value } = inputText.current
    inputText.current.value = ''
    inputText.current.focus()
    inputText.current.scrollIntoView(false)
  })

  const focusInput = () => {
    if (inputText.current) {
      inputText.current.focus()
    }
  }

  return (
    <Wrap onClick={focusInput} ref={scrollRef}>
      <Output output={output} />
      <Prompt />{' '}
      <input
        type="text"
        ref={inputText}
        onKeyPress={({ target: { value }, key }) => onSubmit(value, key)}
      />
    </Wrap>
  )
}

export default Terminal
