import Navbarbanner from './NabarBanner/navbarbanner'
import Navbarbelt from './NavbarBelt/navbarbelt'

function Navbar() {
  return (
    <div className='w-full sticky top-0 z-40'>
        <Navbarbelt/>
        <Navbarbanner/>
    </div>
  )
}

export default Navbar