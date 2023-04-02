import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommandations from './Recommandations'

function Banner() {
    const title = 'La maison jungle'
    return (
<div className='lmj-banner'>
        <div >
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        
        </div>
        <Recommandations />
        </div>
    )
}

export default Banner