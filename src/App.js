import React from 'react'

import './App.css'

const App = () => {
  return (
    <div className='app-container'>
      <ul className='letters-container'>
        <li className='letter-item'>
          <input className='input-box' type='checkbox' />
          <div className='letter'>F</div>
        </li>
        <li className='letter-item'>
          <input className='input-box' type='checkbox' />
          <div className='letter'>R</div>
        </li>
      <li className='letter-item'>
        <input className='input-box' type='checkbox' />
        <div className='letter'>O</div>
      </li>
      <li className='letter-item'>
        <input className='input-box' type='checkbox' />
        <div className='letter'>N</div>
      </li>
      <li className='letter-item'>
        <input className='input-box' type='checkbox' />
        <div className='letter'>T</div>
      </li>
      <li className='letter-item'>
        <input className='input-box' type='checkbox' />
        <div className='letter'>E</div>
      </li>
      <li className='letter-item'>
        <input className='input-box' type='checkbox' />
        <div className='letter'>N</div>
      </li>
      <li className='letter-item'>
        <input className='input-box' type='checkbox' />
        <div className='letter'>D</div>
      </li>
    </ul>
    </div>
  )
}

export default App