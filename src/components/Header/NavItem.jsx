import "./Header.css"
import {NavLink} from "react-router-dom";




export default function NavItem ({children, to}) {
    return (
        <li>
            <NavLink to={to} className={'navigation_item'}>{children}</NavLink>
        </li>
    )
}
