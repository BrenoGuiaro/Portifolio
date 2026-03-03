import { Link } from 'react-router-dom'
import './Projetos.css'
import { CardsProj } from '../CardsProj/CardsProj'

export const Projetos = () => {
  return (
    <div className='boxProjetos' id="projetos">
        <h3 style={{color: '#6366f1', fontWeight: 600 , fontSize:'17px'}}>Trabalhos em destaque</h3>
        <div className='boxSubTitle'>
            <h2 style={{color:'white', fontSize:'35px'}}>Projetos</h2>
            <Link to={'https://github.com/BrenoGuiaro'} id='allProjects'><h5 style={{fontSize:'15px'}}>Ver todos no GitHub &gt;</h5></Link>
        </div>

        <CardsProj
         tec1={'HTML'}
         tec2={'CSS'}
         tec3={'JavaScript'}
         title={'Jogo Titanic'}
         description={'Jogo de arcade focado em agilidade, construído inteiramente com tecnologias nativas'}
         />
    </div>
  )
}
