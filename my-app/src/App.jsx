import { useState } from 'react'
import LayoutBoxCenter from './component/LayoutBoxCenter'
import FormLayout from './component/FormLayout'
import FlexRowLayout from './component/FlexRowLayout'
import ErrorMessage from './component/ErrorMessage'
import CardList from './component/CardList'
import NavbarUI from './component/NavbarUI'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavbarUI/>
     {/* <CardList/> */}
    </>
  )
}

export default App
