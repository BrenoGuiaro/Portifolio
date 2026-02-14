import React from 'react'
import './HeaderP.css'
import icon from '../../images/logoP.png'

export const HeaderP = () => {
  return (
    <header>
      <div className='boxIcon'>
        <img src={icon} alt='icon' width={70} height={70} />
      </div>
      <div className='boxTopics'>
        <div className='organization'>
          <h4>Inicio</h4>
          <h4>Projetos</h4>
          <h4>Sobre</h4>
          <h4>Contato</h4>
        </div>
      </div>
      <div className='boxContact'>
        <input type='submit' value='Contrate-me' id='btnC'/>
      </div>
    </header>
  )
}
