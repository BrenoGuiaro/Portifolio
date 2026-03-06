import React from 'react'
import './Introduction.css'
import { FiGithub as GitHub } from "react-icons/fi";
import { FaLinkedinIn as Linkedin } from "react-icons/fa6";
import { MdOutlineEmail as Email } from "react-icons/md";
import { Link } from 'react-router-dom';

export const Introduction = () => {
  return (
    <div className='boxIntroduction' id='inicio'>
      <div className='boxCenter2'>
        <div className='boxHello'>
          <h1 style={{ color: 'white' }}>Olá, eu sou</h1>
          <h1 style={{ color: '#6366f1', fontWeight: 700, fontStyle: 'normal' }}>Breno Guiaro</h1>
        </div>
        <div className='boxBio'>
          <p>Desenvolvedor de Sites e Sistemas Web
            Crio sites modernos, rápidos e fáceis de usar. Tenho experiência na construção de interfaces visuais e
            no gerenciamento de bancos de dados, garantindo que o sistema seja seguro e eficiente. Trabalho com tecnologias
            atuais para transformar ideias em soluções digitais completas.</p>
        </div>
        <div className='boxLinks'>
          <Link to={'https://github.com/BrenoGuiaro'}><div className='boxBtn'><GitHub size={25} color='white' /></div></Link>
          <Link to={'https://www.linkedin.com/in/brenoguiaro/'}><div className='boxBtn'><Linkedin size={25} color='white' /></div></Link>
          <a href={'mailto:brenoft14@gmail.com'}><div className='boxBtn'><Email size={25} color='white' /></div></a>
        </div>
      </div>


    </div>
  )
}
