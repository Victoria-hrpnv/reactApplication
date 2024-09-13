import './AboutUs.css'

interface AdvantagesProps{
    title:string
    description:string
}
export default function Advantages ({title, description} : AdvantagesProps){
    return (
        <li className="advantages_item">
            <h2 className="advantages_title">{title}</h2>
            <p className="advantages_description">{description}</p>
        </li>
    )
}