import { Link } from 'react-router-dom'
import Back from '../../assets/back-button.svg'

function Header() {
  return (
    <header>
        <div className="container">
            <Link to="/" >
                <img src={Back} style={{width:'50px'}}/>
            </Link>
        </div>
    </header>
  )
}

export default Header