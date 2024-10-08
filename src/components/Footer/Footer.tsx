
import ButtonLink from "../ButtonLink/ButtonLink.tsx";
import './Footer.css'
import FooterLink from "./footerLink.tsx";
import FooterLinkChild from "./FooterLinkChild.tsx";
import {Link} from "react-router-dom";
import SocialMediaItem from "./SocialMediaItem.tsx";
import EmailFormFooter from "../Forms/EmailFormFooter/EmailFormFooter.tsx";

export default function Footer() {
    return (
        <footer className="footer">
            <section className={'footer_startJourney'}>
                <div className={'startJourney_wrapper'}>
                <h2 className={'startJourney_title'}> Start Your Real Estate Journey Today </h2>
                <p className={'startJourney_description'}>Your dream property is just a click away. Whether you're
                    looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to
                    assist you every step of the way. Take the first step towards your real estate goals and explore our
                    available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <ButtonLink to={'/'}>Explore Properties</ButtonLink>
            </section>

            <section className={'footer_nav'}>
                <div className="nav_logo">
                    <img src="/Logo.png" width={'160'} height={'48'} alt=""/>
                    <EmailFormFooter />
                </div>

                <div className="nav_link">
                    <div className="link_page">
                        <FooterLink to={'/'}>Home</FooterLink>
                        <FooterLinkChild to={'/'}>Hero section</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Features</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Properties</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Testimonials</FooterLinkChild>
                        <FooterLinkChild to={'/'}>FAQ’s</FooterLinkChild>
                    </div>
                    <div className="link_page">
                        <FooterLink to={'/aboutUs'}>About Us</FooterLink>
                        <FooterLinkChild to={'/'}>Our Story</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Our Works</FooterLinkChild>
                        <FooterLinkChild to={'/'}>How It Works</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Our Team</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Our Clients</FooterLinkChild>
                    </div>
                    <div className="link_page">
                        <FooterLink to={'/'}>Properties</FooterLink>
                        <FooterLinkChild to={'/'}>Portfolio</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Categories</FooterLinkChild>
                    </div>
                    <div className="link_page">
                        <FooterLink to={'/'}>Services</FooterLink>
                        <FooterLinkChild to={'/'}>Valuation Mastery</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Strategic Marketing</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Negotiation Wizardry</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Closing Success</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Property Management</FooterLinkChild>
                    </div>
                    <div className="link_page">
                        <FooterLink to={'/'}>Contact Us</FooterLink>
                        <FooterLinkChild to={'/'}>Contact Form</FooterLinkChild>
                        <FooterLinkChild to={'/'}>Our Offices</FooterLinkChild>
                    </div>
                </div>
            </section>

            <section className={'footer_socialMedia'}>
                <div className="socialMedia_wrapper">
                    <div className={"socialMedia_info"}>
                        <p className={"info_rights"}>@2023 Estatein. All Rights Reserved.</p>
                        <Link className={"info_rights"} to={'/'}>Terms & Conditions</Link>
                    </div>
                    <div className="socialMedia">
                        <SocialMediaItem to={'/'} src={'/facebook.png'}/>
                        <SocialMediaItem to={'/'} src={'/in.png'}/>
                        <SocialMediaItem to={'/'} src={'/twitter.png'}/>
                        <SocialMediaItem to={'/'} src={'/youtube.png'}/>
                    </div>
                 </div>
            </section>
        </footer>
    )
}