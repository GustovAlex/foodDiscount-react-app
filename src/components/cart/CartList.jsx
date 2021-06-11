import { useSelector } from "react-redux"
import Layout from "../layout/Layout"
import CartItem from "./cartItem/CartItemContainer"
import "./cartStyles.scss"
import IconButton from "../common/iconButton/IconButton"
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { useHistory } from "react-router-dom"

export default function CartList() {
    const history = useHistory()
    const cartList = useSelector((state) => state.data.cartList)

    const onClickButtonBack = () => {
        history.push("/")
    }
    const initialValue = 0
    const TotalPrice = cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.totalPriceWithDiscount
    }, initialValue)

    return (
        <Layout>
            <div className='cartWpap'>
                <div className='iconButtonBack' onClick={onClickButtonBack}>
                    <IconButton
                        icon={faArrowCircleLeft}
                        color='#ff8302'
                        fontSize='24px'
                    />
                    <p className='iconButtonBack-text'>back to product list</p>
                </div>
                <div className='cartWpap-cart'>
                    {cartList.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div>
                <div className='cartWpap-totalPrice'>
                    <p className='cartWpap-totalPrice-title'>total price:</p>
                    <p className='cartWpap-totalPrice-price'>{TotalPrice} $</p>
                </div>
            </div>
        </Layout>
    )
}
