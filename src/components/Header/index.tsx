import { HeaderBar } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <img src={logo} alt="EPLAY" />
    <nav>
      <ul>
        <li><a href="#">Categorias</a></li>
        <li><a href="#">Novidades</a></li>
        <li><a href="#">Promoções</a></li>
      </ul>
    </nav>
  </HeaderBar>
)
 
export default Header
