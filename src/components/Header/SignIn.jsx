import "./Header.css"


export default function SignIN ({children}) {
    return (
        <button className='navigation_sigInButton navigation_item' type={"button"}>{children}</button>
    )
}