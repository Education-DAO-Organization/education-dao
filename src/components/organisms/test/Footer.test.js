import React from 'react'
import { render } from '@testing-library/react'

import Footer from '../Footer'

test('Renders a footer element.', () => {
  const { container } = render(<Footer />)
  const footer = container.querySelector('footer')
  expect(footer).toBeInTheDocument()
})
