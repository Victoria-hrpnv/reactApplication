import "./Header.css"
import {PropsWithChildren} from "react";


export default function SignIN ({children} : PropsWithChildren) {
    return (
        <button className='navigation_sigInButton navigation_item' type={"button"}>{children}</button>
    )
}