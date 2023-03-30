import { useEffect } from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'

import CourseList from './components/pages/CourseList'
import Landing from './components/pages/Landing'
import Lesson from './components/pages/Lesson'
import Preview from './components/pages/Preview'
import Profile from './components/pages/Profile'
import Workspace from './components/pages/Workspace'
import GlobalStyles from './theme/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route element={<Lesson />} exact path='/lesson' />
          <Route element={<CourseList />} path='/courselist/*' />
          <Route element={<Workspace />} path='/workspace' />
          <Route element={<Profile />} path='/profile' />
          <Route element={<Preview />} path='/preview' />
          <Route element={<Landing />} path='/' />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
