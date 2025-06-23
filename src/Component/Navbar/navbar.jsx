import Navbarbanner from './NabarBanner/navbarbanner'
import Navbarbelt from './NavbarBelt/navbarbelt'

function Navbar() {
  return (
    <div className='w-full border border-black '>
        <Navbarbelt/>
        <Navbarbanner/>
    </div>
  )
}

export default Navbar