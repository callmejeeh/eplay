class Game {
  categoria: string
  descricao: string
  imagem: string
  infos: string[]
  sistema: string
  titulo: string
  id: number

  constructor(
    categoria: string,
    descricao: string,
    imagem: string,
    infos: string[],
    sistema: string,
    titulo: string,
    id: number
  ) {
    this.id = id
    this.categoria = categoria
    this.imagem = imagem
    this.infos = infos
    this.descricao = descricao
    this.sistema = sistema
    this.titulo = titulo
  }
}

export default Game
