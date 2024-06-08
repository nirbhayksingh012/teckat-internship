import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState<number>(81);
  useEffect(() =>
  {
    setData(81);
  },[]);

  return (
    <>
      <div>{data}
      </div>
       
    </>
  )
}

export default App
