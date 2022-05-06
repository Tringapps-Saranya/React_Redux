// import React from 'react'
// import '../asserts/Footer.css'
// import '../asserts/Layout.css'
// export const Footer = () => {
//   return (
//     <div className="footer">
//       <p> Welcome</p>
//     </div>
//   )
// }

import React from 'react'
import '../asserts/Layout.css'
import '../asserts/Footer.css'
import { useSelector } from 'react-redux'
export default function Footer() {
  const store=useSelector((state)=>state.web)
  return (
    <div className='footer'>
        <div>
          Welcome {store.name}
          <div>{store.address}</div>
          </div>
    </div>
  )
}
