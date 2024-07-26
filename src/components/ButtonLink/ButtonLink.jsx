import {NavLink} from "react-router-dom";
import './ButtonLink.css'

export default function ButtonLink ({to, children}) {
    return (
        <NavLink to={to} className={'buttonLink'}>{children}</NavLink>
    )
}