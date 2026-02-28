import './CardsProj.css'
import { LuExternalLink as IconRoute } from "react-icons/lu";
import { FiGithub as GitHub } from "react-icons/fi";

export const CardsProj = ({ tec1, tec2, tec3, title, description }) => {
    return (
        <div className='boxCard'>
            <div className='textTec'>
                <h5 style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>{tec1}</h5>
                <h5 style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>{tec2}</h5>
                <h5 style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>{tec3}</h5>
            </div>
            <div className='title'>
                <h2 style={{ color: 'white', fontWeight: 600 }}>{title}</h2>
            </div>
            <div className='description'>
                <p style={{ color: 'rgba(255,255,255,30%)', fontWeight: 600 }}>{description}</p>
            </div>
            <div className='routes'>
                <div className='route'>
                    <IconRoute  />
                    <p style={{ fontWeight: 500, fontSize: '13px', marginLeft: '5px' }}>Deploy</p>
                </div>
                <div className='route'>
                    <GitHub />
                    <p style={{ fontWeight: 500, fontSize: '13px', marginLeft: '5px' }}>Codigo</p>
                </div>
            </div>
        </div>
    )
}
