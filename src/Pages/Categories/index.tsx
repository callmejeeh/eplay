import ProductsList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRPGGamesQuery,
  useGetSimGamesQuery,
  useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()
  const { data: simGames } = useGetSimGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()

  if (actionGames && sportGames && simGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionGames} titulo="Ação" background="black" />
        <ProductsList games={sportGames} titulo="Esportes" background="gray" />
        <ProductsList games={simGames} titulo="Simulação" background="black" />
        <ProductsList games={fightGames} titulo="Luta" background="gray" />
        <ProductsList games={rpgGames} titulo="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
