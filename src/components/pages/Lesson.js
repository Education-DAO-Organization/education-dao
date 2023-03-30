import React, { useState, useEffect } from 'react'

import { encode, decode } from 'js-base64'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { MODULES } from '../../constants/Modules'
import { WHY_LEARN } from '../../constants/modules/001/intro/why_learn.js'
import useLesson from '../../hooks/UseLesson'
import LessonComplete from '../atoms/LessonComplete'
import Markdown from '../organisms/Markdown'
import Layout from '../templates/Layout'

const Lesson = () => {
  // const endpoint = 'https://api.github.com/repos/ConsenSys-Academy/Blockchain-Developer-Bootcamp/contents/docs/'

  // const [rawMarkdown, setRawMarkdown] = useState('')
  // const [githubFiles, setGithubFiles] = useState([])

  // useEffect (() => {
  //   (async () => {
  //     const obj = []
  //     try {
  //       const response = await fetch(endpoint)
  //       const directories = await response.json()
  //       for (let dir of directories) {
  //         // If dir !begins with img
  //         // console.log(dir)
  //         const { name } = dir
  //         if (name !== 'img') {
  //           obj.push({
  //             // Do the regex thing here
  //             name: name,
  //             // Will use this to attach to
  //             path: name
  //           })
  //           const response = await fetch(`${endpoint}${name}`)
  //           const subDirectories = await response.json()
  //           // console.log(subDirectories)
  //         }
  //       }
  //       // console.log(obj)
  //       // setRawMarkdown(decode(content))
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })()
  // }, [])
  //
  // useEffect (() => {
  //   (async () => {
  //     try {
  //       const url = 'https://api.github.com/repos/ConsenSys-Academy/Blockchain-Developer-Bootcamp/contents/docs/S02-ethereum/M1-background/index.md'
  //       const response = await fetch(url)
  //       const data = await response.json()
  //       const { content } = data
  //       setRawMarkdown(decode(content))
  //     } catch (e) {
  //       // console.log(e)
  //     }
  //   })()
  // }, [])

  // Works to remove the target=_blank for rn
  // const parseText = WHY_LEARN.replaceAll('{target=_blank}', '')

  const { courseId, lessonId } = useParams()
  const course = MODULES.find((course) => course.id === courseId)
  const lesson = course?.lessons.find((lesson) => lesson.id === lessonId) ?? {}
  const slug = lesson.slug ?? ''
  const { content, isLoading, error } = useLesson(slug)

  if (!slug) {
    return <main>404 - Not found</main>
  }

  if (isLoading) {
    return <main>Loading...</main>
  }

  if (error) {
    console.error(`Failed to retrieve lesson content! ${error}`)
    return <main>Ops, something went wrong!</main>
  }

  return (
    <Layout page='lesson'>
      {/* {rawMarkdown && (
        <> */}
      <Markdown block={content} />
      <LessonComplete />
      {/* </> */}
      {/* )} */}
    </Layout>
  )
}

export default Lesson
