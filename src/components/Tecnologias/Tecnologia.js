import { CardsTec } from '../CardsTec/CardsTec'
import './Tecnologia.css'

export const Tecnologia = () => {
  return (
    <div className='boxTecnologia'>
        <h3 style={{color: '#6366f1', fontWeight: 600 , fontSize:'17px'}}>Tecnologias que utilizo</h3>

        <div className='boxCards'>
            <CardsTec text={'ReactJS'}/>
            <CardsTec text={'React Native'}/>
            <CardsTec text={'Node.js'}/>
            <CardsTec text={'Git'}/>
            <CardsTec text={'SQL Server'}/>
            <CardsTec text={'MongoDB'}/>
            <CardsTec text={'Flask'}/>
            
            


        </div>
    </div>
  )
}
