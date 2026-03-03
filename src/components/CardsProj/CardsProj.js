import './CardsProj.css'
import { LuExternalLink as IconRoute } from "react-icons/lu";
import { FiGithub as GitHub } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Projects from './Projects.json'

export const CardsProj = () => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center', flexDirection:'column', gap:'25px'}}>
            {Projects.map((projeto) => (
                <div className='boxCard'>
                    <div className='textTec'>
                        <h5 style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>{projeto.tecs.tec1}</h5>
                        <h5 style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>{projeto.tecs.tec2}</h5>
                        <h5 style={{ color: '#6366f1', fontWeight: 600, fontSize: '15px' }}>{projeto.tecs.tec3}</h5>
                    </div>
                    <div className='title'>
                        <h2 style={{ color: 'white', fontWeight: 600 }}>{projeto.title}</h2>
                    </div>
                    <div className='description'>
                        <p style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 600 }}>{projeto.description}</p>
                    </div>
                    <div className='routes'>
                        <div className='route'>
                            <Link className='route-hover' to={projeto.deploy}>
                                <IconRoute />
                                <p style={{ fontWeight: 500, fontSize: '13px', marginLeft: '5px' }}>Deploy</p>
                            </Link>
                        </div>
                        <div className='route'>
                            <Link className='route-hover' to={projeto.codigo}>
                                <GitHub />
                                <p style={{ fontWeight: 500, fontSize: '13px', marginLeft: '5px' }}>Codigo</p>
                            </Link>
                        </div>
                    </div>

                    <div className='boxImage'>
                        <img src={projeto.image} alt='Capa projeto' id='image'/>
                    </div>
                </div>

            ))
            }
        </div>
    )
}
