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
