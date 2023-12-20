import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'

import imgRE4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import IMGSW from '../../assets/images/star_wars.png'
import { useEffect, useState } from 'react'

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
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [EmBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])
  return (
    <>
      <Banner />
      <ProductsList games={promocoes} titulo="Promoções" background="gray" />
      <ProductsList games={EmBreve} titulo="Em Breve" background="black" />
    </>
  )
}

export default Home
