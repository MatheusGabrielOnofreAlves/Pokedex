import React from 'react'

const Searchbar = () => {
    const onChangeHeadler = (e) => {
        console.log ("pokemon:", e.target.value)
    }
  return (
    <div className='searchbar-container'>
      <div className='searchbar'>
        <input placeholder='Buscar Pokemon' onChange={onChangeHeadler}/> 
      </div>
    </div>
  )
}

export default Searchbar