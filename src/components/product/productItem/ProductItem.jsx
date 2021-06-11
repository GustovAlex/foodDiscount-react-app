import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import IconButton from "../../common/iconButton/IconButton"
import SelectQuantity from "../../common/selectQuantity/SelectQuantity"
import "../productStyles.scss"

export default function ProductItem({
    product,
    text,
    quantity,
    onClickAddUpdateProductToCart,
    onClickChengeQuantityIncrement,
    onClickChengeQuantityDecrement,
    onChangeQuantity,
}) {
    return (
        <div className='productItem'>
            <div className='productItem-img'>
                <img
                    className='productItem-img-item'
                    src={`img/${product.img}`}
                    alt='img'
                />
                <img
                    className='productItem-img-saleImg'
                    src='./img/sale.png'
                    alt='sale'
                />
            </div>
            <p className='productItem-name'>{product.name}</p>
            <div className='productItem-order'>
                <SelectQuantity
                    quantity={quantity}
                    onClickIncrement={onClickChengeQuantityIncrement}
                    onClickDecrement={onClickChengeQuantityDecrement}
                    onChangeQuantity={onChangeQuantity}
                />
                <p className='productItem-order-price'>
                    {product.price} {product.currency} / kg
                </p>
                <div onClick={quantity ? onClickAddUpdateProductToCart : null}>
                    <p
                        className='productItem-order-text'
                        style={{ color: quantity ? "#ff8302" : "#8E989B" }}>
                        {text}
                    </p>
                    <IconButton
                        className='productItem-order-icon'
                        icon={faCartArrowDown}
                        color={quantity ? "#ff8302" : "#8E989B"}
                        fontSize='24px'
                    />
                </div>
            </div>
        </div>
    )
}
