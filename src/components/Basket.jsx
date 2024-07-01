import { BasketItem } from "./BasketItem"

export const Basket = ({ items, onAdd, onDecrement, onRemove, onSale, saleBtn }) => {
    return <div>
        {/* {saleBtn ? <button onClick={onSale}>SALE</button> : null} */}
        <table>
            <thead>
                <tr>
                    <th>product</th>
                    <th>price</th>
                    <th>count</th>
                    <th>subtotal</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(elm => <BasketItem
                        key={elm.id}
                        {...elm}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onDecrement={onDecrement} />)
                }
            </tbody>
        </table>
    </div>
}