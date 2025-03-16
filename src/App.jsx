import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NarBar from './components/NarBar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {

  const [searchQuery, setSearchQuery] = useState('best seller')

  return (
    <div className='min-h-screen bg-gray-900' >
      <NarBar handleSearch={(term)=>setSearchQuery(term)}></NarBar>
      <Banner></Banner>
      <Hero searchQuery={searchQuery}></Hero>
      <Footer></Footer>
    </div>
  )
}

export default App
