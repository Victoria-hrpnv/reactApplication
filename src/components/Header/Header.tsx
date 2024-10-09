import './Header.css'
import NavItem from "./NavItem.tsx";
import SignIN from "./SignIn.tsx";

export default function Header(){
    return(
        <header className='header'>
            <div className='header_wrapper'>
                 <img className='headerLogo' src="../../../public/Logo.png" alt="Лого" width='160' height='49'/>
                <nav className='navigation'>
                    <ul className='navigation_list'>
                        <NavItem to={'/'}>Home</NavItem>
                        <NavItem to={'aboutUs'}>About Us</NavItem>
                        <NavItem to={'properties'}>Properties</NavItem>
                        {/*<NavItem to={'services'}>Services</NavItem>*/}
                    </ul>
                </nav>
                <SignIN>Contact Us</SignIN>
            </div>
        </header>
    )
}
