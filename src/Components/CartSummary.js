const CartSummary = (props) => {
    return (
        <tr>
            <td><b>Summary</b></td>
            <td></td>
            <td></td>
            <td><b>{props.priceSum} €</b></td>
        </tr>
    )
}

export default CartSummary;