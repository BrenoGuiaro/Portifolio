import React from 'react'
import './Home.css'
import { HeaderP } from '../../components/Header/HeaderP'
import { Introduction } from '../../components/Introduction/Introduction'
import { Tecnologia } from '../../components/Tecnologias/Tecnologia'
import { Projetos } from '../../components/Projetos/Projetos'

export const Home = () => {
  return (
    <>
      <HeaderP />
      <Introduction />
      <Tecnologia/>
      <Projetos/>
    </>
  )
}
