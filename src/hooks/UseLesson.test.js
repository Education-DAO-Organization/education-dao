import { renderHook, act, waitFor } from '@testing-library/react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import useLesson, { getLessonUrl, NO_SLUG_ERROR } from './UseLesson'

const MOCKED_DATA = `
### Hello World
This is a test
`

describe('UseLesson hook', () => {
  let mock
  beforeAll(() => {
    mock = new MockAdapter(axios)
  })
  afterEach(() => {
    mock.reset()
  })

  it('should be defined', () => {
    const { result } = renderHook(() => useLesson('slug'))
    expect(result).toBeDefined()
  })

  it('should throw if to slug were given to it', () => {
    try {
      renderHook(() => useLesson())
      fail('should never get here')
    } catch (e) {
      expect(e.message).toEqual(NO_SLUG_ERROR)
    }
  })

  it('should return the given slug', () => {
    const { result } = renderHook(() => useLesson('slug'))
    expect(result.current.slug).toEqual('slug')
  })

  describe('fetching from Github', () => {
    it('should return the content', async () => {
      mock.onGet(getLessonUrl('slug')).reply(200, MOCKED_DATA)

      const { result } = renderHook(() => useLesson('slug'))

      await waitFor(() => expect(result.current.content).toEqual(MOCKED_DATA))
    })

    it('should set loading flags', async () => {
      mock.onGet(getLessonUrl('slug')).reply(200, MOCKED_DATA)

      const { result } = renderHook(() => useLesson('slug'))

      await waitFor(() => expect(result.current.isLoading).toEqual(true))
      await waitFor(() => expect(result.current.isLoading).toEqual(false))
    })

    describe('when page does not exist', () => {
      beforeEach(() => {
        mock.onGet(getLessonUrl('slug')).reply(404)
      })

      it('should fetch the page', async () => {
        renderHook(() => useLesson('slug'))
        await waitFor(() =>
          expect(mock.history.get[0].url).toEqual(getLessonUrl('slug'))
        )
      })

      it('should return an error', async () => {
        const { result } = renderHook(() => useLesson('slug'))
        await waitFor(() => expect(result.current.error).toBe(404))
      })
    })
  })
})
