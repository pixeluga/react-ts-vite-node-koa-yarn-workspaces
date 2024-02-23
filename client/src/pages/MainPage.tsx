import { useState } from 'react'
import viteLogo from '/vite.svg'
import { fetchTest } from 'src/api'

type Data = {
  name: string
}

function MainPage() {
  const [data, setData] = useState<Data>({ name: '' })

  const getUser = () => {
    fetchTest().then((resp) => {
      setData(resp)
      console.log('resp', resp)
    })
  }

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>

      <h1>Vite + React + TS</h1>
      <p>User: {data.name}</p>
      <button onClick={getUser}>Get user</button>
    </>
  )
}

export default MainPage
