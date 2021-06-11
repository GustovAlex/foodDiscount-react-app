import { useSelector } from "react-redux"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import IconButton from "../common/iconButton/IconButton"
import "./navbarStyles.scss"

export default function Navbar() {
    const cartList = useSelector((state) => state.data.cartList)
    const numberOfProducts = cartList.length

    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <img
                    className='navbar-content-logo'
                    src='img/logo.svg'
                    alt='logo'
                />
                <Link to='cart'>
                    <div className='navbar-content-basket'>
                        <IconButton
                            icon={faShoppingCart}
                            color='#fff'
                            fontSize='50px'
                        />
                        <span className='navbar-content-basket-numberOfProducts'>
                            {numberOfProducts ? numberOfProducts : 0}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
