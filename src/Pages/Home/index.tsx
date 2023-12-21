import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: SoonGames } = useGetSoonQuery()

  if (onSaleGames && SoonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          titulo="Promoções"
          background="gray"
        />
        <ProductsList games={SoonGames} titulo="Em Breve" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
