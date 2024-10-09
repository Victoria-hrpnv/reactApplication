import {memo} from "react";
import './SectionHeader.css'

interface HeaderProps{
    title: string
    description:string
    width:string
}


 function Header({title, description, width}) {

    const style={
        alignItems: 'end',
        justifyContent: "space-between",
        margin: "10px 0 0 0",
        width: width,
    }

    return (
        <div style={style}>
            <img className='abstractImg' src="/AbstractDesign.png" alt="Картинка звездочки"/>
            <div className={'section_headerWrapper'}>
                    <h2 className='section_title'>{title}</h2>
                    <p className='section_description'>{description}</p>
            </div>
        </div>
    )
}

const SectionHeader = memo(Header)
export default SectionHeader