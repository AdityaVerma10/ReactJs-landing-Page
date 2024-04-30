import React from 'react'

const Header = () => {

  const h1Style ={



  }
  return (
    <header 
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      justifyContent:'space-around',
      width: '100vw',
    height: '60px',
    fontSize: '30px',
    fontWeight: '700',
    lineHeight: '45px',
    textAlign: 'center',
    color:'#65451F',
    boxShadow: '0 8px 6px -6px black',
    paddingBottom:'0.5rem'
    }}>
      <div  style={{
      width: '72px',
    height: '57px',
    backgroundColor:'#65451F'
    }}>

      </div>
Simply Helping, Integrating  AI , Simplifying Business,

<div style={{
        width: '31.6px',
        height: '14.5px',
        backgroundColor:'#65451F',
        color:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
}}>

</div>
    </header>
  )
}

export default Header
