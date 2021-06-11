import IconButton from "../iconButton/IconButton"
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"
import "./selectQuantityStyles.scss"

export default function SelectQuantity({
    quantity,
    onClickIncrement,
    onClickDecrement,
    onChangeQuantity,
}) {
    return (
        <>
            <IconButton
                icon={faMinusCircle}
                color={quantity > 0 ? "#ff8302" : "#8E989B"}
                fontSize='24px'
                onClick={onClickDecrement}
            />
            <input
                className='input'
                type='text'
                value={quantity}
                onChange={onChangeQuantity}
            />
            <IconButton
                icon={faPlusCircle}
                color='#ff8302'
                fontSize='24px'
                onClick={onClickIncrement}
            />
        </>
    )
}
