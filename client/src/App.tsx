import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import { fetchTest } from './api'

type Data = {
  name: string
}
function App() {
  const [data, setData] = useState<Data>({ name: '' })

  useEffect(() => {
    fetchTest().then((resp) => {
      setData(resp)
      console.log('resp', resp)
    })
  }, [])

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>

      <h1>Vite + React + TS</h1>
      <p>User: {data.name}</p>
    </>
  )
}

export default App
