import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import {Link} from 'react-router';
import { ListItem } from '@mui/material';
function Navbarbanner() {
  const options = [
    { "name": "Fresh" },
    { "name": "Mx Player" },
    { "name": "Bestsellers" },
    { "name": "Today's Deals" },
    { "name": "Mobile's" },
    { "name": "Prime" ,hasIcon:true },
    { "name": "Customer Service" },
    { "name": "Fashion" },
    { "name": "Amazon Pay" },
    { "name": "News Releases" },
    { "name": "Electronics" },
    { "name": "Home & Kitchen" },
    { "name": "Car & Motorbikes" },
    { "name": "Computers" },
    { "name": "Books" },

  ];

  return (
    <div className="bg-gray-700 h-[50px] flex w-[100%] whitespace-nowrap overflow-x-scroll scrollbar-hide z-40 justify-start items-center pl-3 relative -mt-2">
      <div className="left text-white flex border border-transparent px-0 ">
        <MenuIcon sx={{ fontSize: "33px" , display:"block"}} />
        <div className='text-white flex items-center text-[17px] pt-1'><b>All</b>
        {
        options.map((items) => {
          return (
            <Link to={'product'} className="">
              <div className="text-white text-[15px] font-medium px-4 py-1 border border-transparent hover:border-white flex items-center gap-1">
                <span>{items.name}</span>
                 {items.hasIcon && <ArrowDropDownOutlinedIcon sx={{fontSize:"20px", color:"white"}}/>}
              </div>            
            </Link>
          )
        })
      }
        </div>
         
      </div>
     
    </div>

  )
}
export default Navbarbanner;