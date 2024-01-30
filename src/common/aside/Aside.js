import { Link, Outlet } from "react-router-dom"
import { navigationData } from "./navigationData/NavigationData"
import { useState } from "react"
const asideMenu = navigationData.menus
function Aside() {
   const [isOpen,setIsOpen] = useState(true)

    return (
        <>
            <div className="deznav">
                <div className="deznav-scroll mm-active">
                    <ul className="metismenu mm-show" id="menu">
                        <li className="menu-title">YOUR COMPANY</li>
                        {asideMenu?.map((item,i)=>{
                            return <li className={isOpen ? "mm-active sidebar-item ":"sidebar-item"} onClick={()=>setIsOpen()}><Link className="has-arrow " to={""} aria-expanded="false">
                            <div className="menu-icon">
                                <span>{item?.icon}</span>
                            </div>
                            <span className="nav-text">{item?.title}</span>
                        </Link>
                        { <ul aria-expanded="false" className="mm-collapse mm-show left" style={{}}>
                                {item?.subMenus.map((subItem,i)=>{
                                    return <li className="mm-active sidebar-content"><Link to={subItem?.path} className="mm-active">{subItem?.title}</Link></li>
                                })}
                            </ul>}
                            
                        </li>
                        })}
                    </ul>
                    <div className="help-desk">
                        <Link to="javascript:void(0)" className="btn btn-primary">Help Desk</Link>
                    </div>
                </div>
            <Outlet></Outlet>
            </div>
        </>
    )
}
export default Aside