import React, { useState, useContext } from 'react'

import { Context } from '../context'

const UseConsole = () => {
  const { user } = useContext(Context)
  const { address } = user
  const [log, setLog] = useState([])

  const commands = {
    whoami: address,
    'truffle test': 'Testing commands',
    clear: '',
  }

  const onSubmit = (val, key) => {
    if (key === 'Enter') {
      if (val === 'clear') {
        return setLog([])
      } else {
        return setLog((log) => log.concat({
          input: val,
          output: `${commands[val]}` || `command not found: ${val}`
        }))
      }
    }
  }

  return [log, onSubmit]
}

export default UseConsole
