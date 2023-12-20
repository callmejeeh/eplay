import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import RE4 from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o Jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          repudiandae eveniet ad, animi modi porro ullam veritatis repellendus
          magni, autem corporis est! Atque aut possimus tempore a aperiam
          deserunt natus. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Ab, atque. Eveniet, iusto. Vel consectetur dignissimos vero quae
          nam. Reprehenderit labore adipisci quidem mollitia, sint itaque
          voluptas eligendi consectetur dolorem repellat. Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Repudiandae, adipisci enim nemo
          tempore recusandae est ipsa aspernatur aliquam corrupti itaque ut
          maiores voluptatum molestiae error illo quibusdam magni minima
          impedit.
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          <b>Plataforma:</b> Playstation5 <br />
          <b>Desenvolvedor:</b> Avalanche Software <br />
          <b>Editora:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, iraliano, português, entre outros
          As opções de áudio e legenda podem ser ajustadas nas configurações do
          jogo.
        </p>
      </Section>
      <Gallery name="nome teste" defaultCover={RE4} />
    </>
  )
}

export default Product
