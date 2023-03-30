import { useEffect, useState } from 'react'

import axios from 'axios'

export const NO_SLUG_ERROR = 'The UseLesson hook must receive a slug'

export function getLessonUrl(slug) {
  return `https://raw.githubusercontent.com/ConsenSys-Academy/Blockchain-Developer-Bootcamp/main/docs/${slug}/index.md`
}

const useLesson = (slug) => {
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  if (!slug) throw new Error(NO_SLUG_ERROR)

  useEffect(() => {
    const fetchData = async function (url) {
      setIsLoading(true)
      try {
        const response = await axios.get(url)
        if (response.status === 200) {
          setContent(response.data)
        } else {
          setError(response.status)
        }
      } catch (err) {
        const status = (err.response || {}).status
        console.log(`Setting error to ${status}`)
        setError(status)
        console.log('Failed to fetch lesson:', err.message)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData(getLessonUrl(slug))
  }, [slug])
  return {
    slug,
    content,
    isLoading,
    error
  }
}

export default useLesson
