export const BasketItem = ({ id, title, price, count, onAdd, onDecrement, onRemove }) => {
    return <tr>
        <td>{title}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count * price} USD</td>
        <td>
            <button onClick={() => onAdd(id)}>+</button>
            <button onClick={() => onDecrement(id)}>-</button>
            <button onClick={() => onRemove(id)}>X</button>
        </td>
    </tr>
}