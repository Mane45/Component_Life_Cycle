export const ProductItem = ({ title, id, photo, price, onMove }) => {
    return <div>
        <p>{title}</p>
        <img src={photo} />
        <p><strong>{price} USD</strong></p>
        <button onClick={() => onMove(id)}>move</button>
    </div>
}