import { useState } from 'react'
import LayoutBoxCenter from './component/LayoutBoxCenter'
import FormLayout from './component/FormLayout'
import FlexRowLayout from './component/FlexRowLayout'
import ErrorMessage from './component/ErrorMessage'
import CardList from './component/CardList'
import NavbarUI from './component/NavbarUI'
import HeroUI from './component/HeroUI'
import FeatureSection from './component/FeatureSection'


function App() {
  return (
    <>
    <NavbarUI/>
    <HeroUI/>
    <FeatureSection/>
    </>
  )
}

export default App
