import { Imagem, Titulo, Precos } from './styles'
import bannerFoto from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerFoto})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles morale: PS4 & PS5</Titulo>
        <Precos>
          De <span>R$250</span> <br />
          por apenas R$99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para Aproveitar a oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
