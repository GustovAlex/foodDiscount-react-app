import "../cartStyles.scss"
import IconButton from "../../common/iconButton/IconButton"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

import SelectQuantity from "../../common/selectQuantity/SelectQuantity"

export default function CartItem({
    product,
    withoutDiscontPrice,
    onClickChengeQuantityIncrement,
    onClickChengeQuantityDecrement,
    quantity,
    onChangeQuantity,
    deleteProductHandler,
}) {
    return (
        <div className='cartItem'>
            <div className='cartItem-img'>
                <img
                    className='cartItem-img-item'
                    src={`img/${product.img}`}
                    alt='img'
                />
            </div>
            <div className='cartItem-info'>
                <p className='cartItem-info-title'>{product.name}</p>
                <p>
                    {product.price} {product.currency} / kg
                </p>
            </div>
            <div className='cartItem-price'>
                <SelectQuantity
                    quantity={quantity}
                    onClickIncrement={onClickChengeQuantityIncrement}
                    onClickDecrement={onClickChengeQuantityDecrement}
                    onChangeQuantity={onChangeQuantity}
                />
                <div className='cartItem-price-quantity'>
                    <p className='cartItem-price-quantity-text'>
                        {quantity ? quantity : product.quantity}kg
                    </p>
                </div>
                <div className='cartItem-price-discount'>
                    <div>
                        <p>price for / {product.quantity}kg</p>
                        <p className='cartItem-price-discount-withoutdiscount'>
                            {product.quantity >= 3
                                ? `${withoutDiscontPrice} ${product.currency}`
                                : "no discount"}
                        </p>
                        <p className='cartItem-price-discount-withdiscount'>
                            {product.totalPriceWithDiscount}
                            {product.currency}
                        </p>
                    </div>
                </div>
                <div>
                    <IconButton
                        icon={faTrashAlt}
                        color='#ee1d1d'
                        fontSize='24px'
                        onClick={deleteProductHandler}
                    />
                </div>
            </div>
        </div>
    )
}
