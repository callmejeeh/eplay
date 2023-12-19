import { getNameOfJSDocTypedef } from 'typescript'
import Game from '../../models/game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  titulo: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, titulo, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{titulo}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            categoria={game.categoria}
            descricao={game.descricao}
            imagem={game.imagem}
            infos={game.infos}
            sistema={game.sistema}
            titulo={game.titulo}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
