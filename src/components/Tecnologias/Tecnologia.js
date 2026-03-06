import { HiOutlineCodeBracket as Icon } from "react-icons/hi2";
import './Tecnologia.css'
import Infos_Tec from './Tecnologias_infos.json'

export const Tecnologia = () => {
  return (
    <div className='boxTecnologia'>
      <div className="boxCenter2">
        <h3 id='topic'>Tecnologias que utilizo</h3>

        <div className='boxCards'>
          {Infos_Tec.map((item) => (
            <div className='card'>
              <Icon
                id='icon'
                fontSize={20}
              />
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
