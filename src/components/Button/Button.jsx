import './Button.css'

export default function Button ({type, children, className}) {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    )
}