import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function IconButton({ icon, color, fontSize, onClick }) {
    return (
        <FontAwesomeIcon
            className='navbar-content-basket-iconButton'
            onClick={onClick}
            icon={icon}
            style={{
                color: `${color}`,
                fontSize: `${fontSize}`,
                cursor: "pointer",
            }}
        />
    )
}
