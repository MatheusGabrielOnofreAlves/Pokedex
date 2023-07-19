import React from 'react'

const Navbar = () => {
    const LogoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <div>
      <nav>
        <div><img alt="PokéAPI" 
        src={LogoImg} 
        className='navbar-img'/></div>
      </nav>
    </div>
  )
}

export default Navbar
