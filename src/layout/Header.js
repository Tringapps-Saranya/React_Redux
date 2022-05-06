// import React from 'react'
// import '../asserts/Header.css'
// import '../asserts/Layout.css'
// export const Header = () => {
//   return (
//     <div className="header">
//        <p>Welcome</p>
//     </div>
//   )
// }
import React from 'react'
import '../asserts/Layout.css'
import '../asserts/Header.css'
import { useSelector } from 'react-redux'
export default function Header() {
  const store=useSelector((state)=>state.web)
  return (
    <div className='header'>
        <div>
          Welcome {store.name}
          </div>
    </div>
  )
}