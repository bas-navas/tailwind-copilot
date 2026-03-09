import { useState } from 'react'
import LayoutBoxCenter from './component/LayoutBoxCenter'
import FormLayout from './component/FormLayout'
import FlexRowLayout from './component/FlexRowLayout'
import ErrorMessage from './component/ErrorMessage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <LayoutBoxCenter title={'Patient Record'} body={'Mobile Unit #12'}/> */}
      {/* <FormLayout /> */}
      {/* <FlexRowLayout/> */}
      <ErrorMessage />
    </>
  )
}

export default App
