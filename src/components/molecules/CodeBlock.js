import React from 'react'

import { lighten, transparentize } from 'polished'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import styled from 'styled-components'

import { THEME } from '../../theme/PrismTheme'
import CopyButton from '../atoms/CopyButton'

const Wrap = styled.div`
  position: relative;
  margin: 1em auto;
  ${'' /* border: 1px solid white; */}
  ${'' /* border: 1px solid ${lighten(0.075, '#16171d')}; */}
  ${'' /* background-color: ${lighten(0.03, '#16171d')}; */}
  background-color: #2B2A2A;
  border-radius: 5px;
  ${THEME}
  pre {
    border-radius: 5px;
    margin: 0;
    padding: 1em 0.5em;
    white-space: normal;
    width: 90%;
    word-break: normal;
    word-wrap: normal;
    tab-size: 2;
    hyphens: none;
    > code span::selection {
      background-color: ${transparentize(0.85, lighten(0.5, '#16171d'))};
    }
  }
`

const Language = styled.p`
  color: #9aa1b2;
  font-size: 0.9em;
  ${'' /* background-color: ${lighten(0.075, '#16171d')}; */}
  background-position: top;
  border-radius: 3px;
  width: fit-content;
  padding: 0.35em;
  user-select: none;
`

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  padding: 0.5em 0;
  box-sizing: border-box;
  right: 0.5em;
`

/**
 * `CodeBlock` takes a string of code with backticks, and a language, and returns a `code` element with the code wrapped in a `pre` element, with the language set as a class on the `pre` element.
 * @returns A prism component.
 */

const CodeBlock = ({ children, language, className, ...props }) => {
  console.log(className)
  return (
    <Wrap data-prismjs-copy-timeout="500">
      <Container>
        {language !== 'bash' && <Language>{language}</Language>}
      </Container>
      <SyntaxHighlighter
        showLineNumbers={false}
        useInlineStyles={false}
        wrapLines={true}
        showInlineLineNumbers={true}
        children={children}
        language={language}
        style={THEME}
        {...props}
      />
    </Wrap>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  language: PropTypes.string.isRequired,
}

export default CodeBlock
