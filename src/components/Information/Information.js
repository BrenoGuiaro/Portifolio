import './Information.css'
import Informations from './Information.json'

export const Information = () => {
  return (
    <div className='boxInformation' id='sobre'>
      <div className='boxCenter'>
        <div className='boxSobre'>
          <h3 style={{ color: '#6366f1', fontWeight: 'bold', fontSize: '15px' }}>Sobre Mim</h3>
          <div className='content'>
            <p style={{ color: 'white', fontWeight: 600, fontSize: '15px' }}>Iniciei minha jornada na tecnologia por curiosidade e logo me apaixonei pela capacidade de transformar linhas de código em soluções reais.Como desenvolvedor júnior, busco constantemente aprender novas ferramentas e metodologias ágeis.
              <br></br><br></br>
              Valorizo o código limpo, a experiência do usuário e a colaboração em equipe. Estou pronto para contribuir em projetos desafiadores e crescer profissionalmente.</p>
          </div>
        </div>

        <div className='boxAcad'>
          <h3 style={{ color: '#6366f1', fontWeight: 'bold', fontSize: '15px' }}>Educação e Experiência</h3>
          {Informations.map((item) => (
            <div className='boxEns'>
              <h3 className='titleEns'>{item.title}</h3>
              <p className='subtitleEns'>{item.instituicao} • {item.ano}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
