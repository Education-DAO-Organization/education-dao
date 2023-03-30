import React from 'react'

import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import Lesson from './Lesson'

import { MODULES } from '../../constants/Modules'
import Card from '../molecules/Card'

const Main = styled.main`
  ${'' /* border: 1px solid red; */}
  height: fit-content;
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 1em;
  overflow: scroll;
`

const CourseList = () => {
  return (
    <Main>
      <Routes>
        <Route
          index
          element={MODULES.map((module, idx) => (
            <Card
              data={module}
              path={`${module.id}/${module.lessons[0]?.id ?? ''}`}
              key={module.id}
            />
          ))}
        />
        <Route path=':courseId/:lessonId' element={<Lesson />} />
      </Routes>
      {/* {MODULES.map ((module, idx) =>
        <Card data={ module } key= { idx }/>
      )} */}
    </Main>
  )
}

export default CourseList
