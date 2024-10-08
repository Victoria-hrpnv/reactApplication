import {Link} from "react-router-dom";
import './Footer.css'
import {PropsWithChildren} from "react";

interface Props extends  PropsWithChildren{
    to: string
}
export default function FooterLink ({to, children}:Props) {
    return(

        <Link className={'link_main'} to={to}>{children}</Link>
    )
}