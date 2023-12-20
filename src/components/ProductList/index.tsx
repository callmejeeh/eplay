import { Game } from '../../Pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  titulo: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductsList = ({ background, titulo, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current))
    }
    return tags
  }
  return (
    <Container background={background}>
      <div className="container">
        <h2>{titulo}</h2>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                categoria={game.details.category}
                descricao={game.description}
                imagem={game.media.thumbnail}
                infos={getGameTags(game)}
                sistema={game.details.system}
                titulo={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
