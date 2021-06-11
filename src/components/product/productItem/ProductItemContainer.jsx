import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductItem from "./ProductItem"
import {
    addProductToCart,
    updateSelectedProduct,
    deleteProductInCart,
} from "../../../redux/actions/index"
import { calculateDiscount } from "../../../services/index"

export default function ProductItemContainer({ product }) {
    const cartList = useSelector((state) => state.data.cartList)
    const dispatch = useDispatch()

    const getDefaultQuantity = () => {
        if (cartList.lenght !== 0) {
            const targetProduct = cartList.find(
                (item) => item.id === product.id
            )
            if (targetProduct) {
                return targetProduct.quantity
            }
        }
    }

    const [quantity, setQuantity] = useState(getDefaultQuantity() || 0)
    const [text, setText] = useState("add")

    useEffect(() => {
        calculateDiscount(quantity, product.price, product.discount)
    }, [quantity])
    const totalPriceWithDiscount = calculateDiscount(
        quantity,
        product.price,
        product.discount
    )

    useEffect(() => {
        setText("add")
    }, [quantity])

    const updateProduct = () => {
        dispatch(
            updateSelectedProduct({
                ...product,
                quantity,
                totalPriceWithDiscount,
            })
        )
        setText("added")
    }

    const addProduct = () => {
        dispatch(
            addProductToCart({ ...product, quantity, totalPriceWithDiscount })
        )
        setText("added")
    }

    const onClickAddUpdateProductToCart = () => {
        if (cartList.lenght !== 0) {
            const targetProduct = cartList.find(
                (item) => item.id === product.id
            )
            if (targetProduct) {
                return updateProduct()
            }
        }
        return addProduct()
    }

    const onClickChengeQuantityIncrement = () => {
        setQuantity(+quantity + 1)
    }

    const onClickChengeQuantityDecrement = () => {
        if (quantity > 0) {
            setQuantity(+quantity - 1)
        }
    }

    useEffect(() => {
        if (quantity === 0) {
            if (cartList.lenght !== 0) {
                dispatch(deleteProductInCart(product.id))
            }
        }
    }, [quantity])

    const onChangeQuantity = (e) => setQuantity(+e.target.value)

    return (
        <ProductItem
            product={product}
            text={text}
            quantity={quantity}
            onClickAddUpdateProductToCart={onClickAddUpdateProductToCart}
            onClickChengeQuantityIncrement={onClickChengeQuantityIncrement}
            onClickChengeQuantityDecrement={onClickChengeQuantityDecrement}
            onChangeQuantity={onChangeQuantity}
        />
    )
}
