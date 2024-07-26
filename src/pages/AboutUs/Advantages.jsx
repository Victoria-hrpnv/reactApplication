import './AboutUs.css'

export default function Advantages ({title, description}){
    return (
        <li className="advantages_item">
            <h2 className="advantages_title">{title}</h2>
            <p className="advantages_description">{description}</p>
        </li>
    )
}