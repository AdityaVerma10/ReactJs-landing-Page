import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

        flexDirection:'column',
        gap:'2rem'
      }}>
        <Header/>
        <Section1/>
        <div style={{
          backgroundColor:'#F6F6F6',
          // height:'1500px'
        }}>
        <Section2/>
        <Section3/>
        <Section4/>
        </div>
        </div>

    </>
  )
}

export default App
