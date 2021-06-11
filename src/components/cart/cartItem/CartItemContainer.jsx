import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { calculateDiscount } from "../../../services/index"
import {
    updateSelectedProduct,
    deleteProductInCart,
} from "../../../redux/actions/index"

export default function CartItemContainer({ product }) {
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(product.quantity)
    useEffect(() => {
        calculateDiscount(quantity, product.price, product.discount)
    }, [quantity])
    const totalPriceWithDiscount = calculateDiscount(
        quantity,
        product.price,
        product.discount
    )

    const withoutDiscontPrice = product.quantity * product.price

    useEffect(() => {
        dispatch(
            updateSelectedProduct({
                ...product,
                quantity,
                totalPriceWithDiscount,
            })
        )
    }, [quantity])

    const onClickChengeQuantityIncrement = () => {
        setQuantity(+quantity + 1)
    }

    const onClickChengeQuantityDecrement = () => {
        quantity > 1 && setQuantity(+quantity - 1)
    }

    const onChangeQuantity = (e) => setQuantity(+e.target.value)

    const deleteProductHandler = () => dispatch(deleteProductInCart(product.id))

    return (
        <CartItem
            product={product}
            withoutDiscontPrice={withoutDiscontPrice}
            onClickChengeQuantityIncrement={onClickChengeQuantityIncrement}
            onClickChengeQuantityDecrement={onClickChengeQuantityDecrement}
            quantity={quantity}
            onChangeQuantity={onChangeQuantity}
            deleteProductHandler={deleteProductHandler}
        />
    )
}
