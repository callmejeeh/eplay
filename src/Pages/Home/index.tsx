import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Game from '../../models/game'

import imgRE4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import IMGSW from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    categoria: 'Ação',
    descricao: 'Lorem ipsum',
    titulo: 'Resident Evil 4',
    sistema: 'Windows',
    infos: ['10%', 'R$250,00'],
    imagem: imgRE4
  },
  {
    id: 2,
    categoria: 'Ação',
    descricao: 'Lorem ipsum',
    titulo: 'Resident Evil 4',
    sistema: 'Windows',
    infos: ['10%', 'R$250,00'],
    imagem: imgRE4
  },
  {
    id: 3,
    categoria: 'Ação',
    descricao: 'Lorem ipsum',
    titulo: 'Resident Evil 4',
    sistema: 'Windows',
    infos: ['10%', 'R$250,00'],
    imagem: imgRE4
  },
  {
    id: 4,
    categoria: 'Ação',
    descricao: 'Lorem ipsum',
    titulo: 'Resident Evil 4',
    sistema: 'Windows',
    infos: ['10%', 'R$250,00'],
    imagem: imgRE4
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    categoria: 'RPG',
    descricao: 'Lorem ipsum',
    titulo: 'Diablo IV',
    sistema: 'Windows',
    infos: ['17/05'],
    imagem: diablo
  },
  {
    id: 6,
    categoria: 'RPG',
    descricao: 'Lorem ipsum',
    titulo: 'Zelda TOK',
    sistema: 'Nintendo Switch',
    infos: ['17/05'],
    imagem: zelda
  },
  {
    id: 7,
    categoria: 'RPG',
    descricao: 'Lorem ipsum',
    titulo: 'Diablo IV',
    sistema: 'Windows',
    infos: ['17/05'],
    imagem: diablo
  },
  {
    id: 8,
    categoria: 'RPG',
    descricao: 'Lorem ipsum',
    titulo: 'Star Wars',
    sistema: 'Windows',
    infos: ['17/05'],
    imagem: IMGSW
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} titulo="Promoções" background="gray" />
    <ProductsList games={emBreve} titulo="Em Breve" background="black" />
  </>
)

export default Home
