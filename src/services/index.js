export const calculateDiscount = (quantity, price, discount) => {
    // const remainder = quantity % 3
    // const discountAmount = ((quantity - remainder) / 3) * discount
    // const result = quantity * price - discountAmount
    const result =
        quantity * price - ((quantity - (quantity % 3)) / 3) * discount
    return result
}
