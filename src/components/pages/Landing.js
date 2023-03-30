import React from 'react'

import styled from 'styled-components'

import book from '../../assets/pngs/book.png'
import ellipse from '../../assets/pngs/ellipse.png'
import { MODULES } from '../../constants/Modules'
import Accordion from '../molecules/Accordion'
import Card from '../molecules/Card'
import Hero from '../molecules/Hero'
import Layout from '../templates/Layout'


// Create FAQ

const Container = styled.section`
	margin: 1.5em 0;
	display: grid;
	grid-template-columns: repeat(3, auto);
	justify-content: space-between;
	grid-row-gap: 4em;
`

const chapters = [
	{
		name: 'Introduction',
		img: book,
	},
	{
		name: 'Fundamentals',
		img: ellipse,
	},
	{
		name: 'Ethereum Basics',
		img: book,
	},
	{
		name: 'Developer Tooling',
		img: ellipse,
	},
	{
		name: 'DeFi and DAOs',
		img: book,
	},
	{
		name: 'Additional Topics',
		img: ellipse,
	},
	{
		name: 'Ethereum 2.0',
		img: book,
	},
]

const Landing = () => {
  return (
    <Layout page='lesson'>
      <Hero />
			<h1>Modules</h1>
      <Container>
        {/* {Object.keys(MODULES).map((module, idx) =>
          <Card key={`module no. ${idx + 1}`} data={module}/>
        )} */}
				{chapters.map((module, idx) =>
          <Card key={`module no. ${idx + 1}`} data={module}/>
        )}
      </Container>
			<h1>FAQ</h1>
			<Accordion />
    </Layout>
  )
}

export default Landing
