import React from 'react'

import { TOKENS } from '../../constants/Tokens.js'
import Markdown from '../organisms/Markdown'
import Layout from '../templates/Layout'

// This is a temp route to preview the css for all the tokens
const Preview = () => {
  return (
    <Layout page='lesson'>
      <Markdown block={TOKENS} />
    </Layout>
  )
}

export default Preview
