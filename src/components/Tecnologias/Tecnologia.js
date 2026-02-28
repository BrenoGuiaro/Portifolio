import { CardsTec } from '../CardsTec/CardsTec'
import './Tecnologia.css'

export const Tecnologia = () => {
  return (
    <div className='boxTecnologia'>
        <h3 style={{color: '#6366f1', fontWeight: 600 , fontSize:'17px'}}>Tecnologias que utilizo</h3>

        <div className='boxCards'>
            <CardsTec text={'ReactJS'}/>
            <CardsTec text={'ReactJS'}/>
            <CardsTec text={'ReactJS'}/>
            <CardsTec text={'ReactJS'}/>
            <CardsTec text={'ReactJS'}/>


        </div>
    </div>
  )
}
