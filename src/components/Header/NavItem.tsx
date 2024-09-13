import "./Header.css"
import {NavLink} from "react-router-dom";
import {PropsWithChildren} from "react";


interface NavItemProps extends PropsWithChildren{
    to: string
}

export default function NavItem ({children, to}:NavItemProps) {
    return (
        <li>
            <NavLink to={to} className={'navigation_item'}>{children}</NavLink>
        </li>
    )
}
