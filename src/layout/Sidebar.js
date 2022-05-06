// import React from 'react'
// import '../asserts/Sidebar.css'
// import '../asserts/Layout.css'
// export const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//         <p>Menu1</p>
//         <p>Menu2</p>
//         <p>Menu3</p>
//         <p>Menu4</p>
//     </div>
//   )
// }
import { useSelector } from 'react-redux'
import '../asserts/Sidebar.css'
import '../asserts/Layout.css'
export default function SideBar(){
    const menu = useSelector((state) => state.web)
    return(
        <div className = "sidebar">
            {menu.sideBar.map((menuItems) => {
                return <p>{menuItems}</p>
            })}
        </div>
    )
}