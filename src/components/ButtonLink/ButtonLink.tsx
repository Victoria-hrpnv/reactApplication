import {NavLink} from "react-router-dom";
import './ButtonLink.css'
import {PropsWithChildren} from "react";

interface Props extends  PropsWithChildren{
    to: string
}

export default function ButtonLink ({to, children} : Props) {
    return (
        <NavLink to={to} className={'buttonLink'}>{children}</NavLink>
    )
}