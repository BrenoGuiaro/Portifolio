import React from 'react'
import './Home.css'
import { HeaderP } from '../../components/Header/HeaderP'
import { Introduction } from '../../components/Introduction/Introduction'
import { Tecnologia } from '../../components/Tecnologias/Tecnologia'
import { Projetos } from '../../components/Projetos/Projetos'
import { Information } from '../../components/Information/Information'

export const Home = () => {
  return (
    <>
      <div className='back'>
        <HeaderP />
        <Introduction />
        <Tecnologia />
        <Projetos />
        <Information/>
      </div>
    </>
  )
}
