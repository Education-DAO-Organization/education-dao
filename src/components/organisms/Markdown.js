import React from 'react'

import { lighten } from 'polished'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { Tweet } from 'react-twitter-widgets'
import raw from 'rehype-raw'
import remarkBreaks from 'remark-breaks'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
// import remarkGfm from 'remark-gfm'
// import remarkRehype from 'remark-rehype'
import remarkTaskList from 'remark-task-list'
import styled from 'styled-components'

import Anchor from '../atoms/Anchor'
import { UnorderedList, OrderedList } from '../atoms/Lists'
import MarkdownImage from '../atoms/MarkdownImage'
import CodeBlock from '../molecules/CodeBlock'
import Details from '../molecules/Details'
import Resource from '../molecules/Resource'
import ResourceList from '../organisms/ResourceList'

const Wrap = styled.section`
  padding: 0 2em 2em;
  overflow-y: ${({isWorkSpace}) => isWorkSpace || 'scroll' };
  ${'' /* background-color: #16171d; */}
  box-sizing: border-box;
  grid-area: instruction;
  p {
    ${'' /* font-size: 1.2em; */}
    white-space: pre-wrap;
  }
`

const TweetWrap = styled.div`
  div {
    margin: 0 auto;
    * { background-color: transparent; }
  }

`

const Markdown = ({ block }) => {
  return (
    <Wrap>
      <ReactMarkdown
        remarkPlugins={[
          remarkBreaks, remarkDirective, remarkDirectiveRehype, remarkTaskList
        ]}
        rehypePlugins={[raw]}
        components={{
          'resource-list': ({ title, children }) => {
            return (
              <ResourceList title={title}>
                {children.map((child) =>
                  <Resource key={child.props.title} data={child.props} />
                )}
              </ResourceList>
            )
          },
          'tweet': ({ id }) => {
            return <TweetWrap>
              <Tweet align='center' tweetId={id} options={{ theme: 'dark' }} />
            </TweetWrap>
          },
          a({ children, href }) {
            // Issue here is that React-Markdown isn't recognizing the {target=_blank} as part of the link
            return <Anchor external={true} name={children} url={href} inline={true} />
          },
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            // chain this ternary to check if match is cli
            // if so, insert code block for CLI
            return !inline && match ? (
              <CodeBlock
                data-prismjs-copy="Copy the C snippet!"
                children={String(children).replace(/\n$/, '')}
                className={className}
                language={match[1]}
                {...props}
              />
            ) : (
              <code {...props}>{children}</code>
            )
          },
          li({ ordered, children }) {
            return ordered ? (
              <OrderedList>{children}</OrderedList>
            ) : (
              <UnorderedList>{children}</UnorderedList>
            )
          },
          details({ children }) {
            const [header, content] = children
            return <Details header={header} content={content} />
          },
          img({ ...props }) {
            const { src, alt } = props
            return <MarkdownImage src={src} alt={alt} />
          }
        }}
      >
        {block}
      </ReactMarkdown>
    </Wrap>
  )
}

export default Markdown

Markdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  block: PropTypes.string.isRequired,
  isWorkSpace: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string,
  id: PropTypes.string
}
