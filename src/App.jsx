import { useEffect, useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  useEffect(() => {
    fetch("http://localhost:3004/products")
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [products])

  const moveToCart = id => {
    let found = basket.find(x => x.id == id)
    if (found) {
      found.count++
      setBasket([...basket])
    } else setBasket([...basket, { ...products.find(x => x.id == id), count: 1 }])
  }
  const addCount = id => {
    let found = basket.find(x => x.id == id)
    found.count++
    setBasket([...basket])
  }
  const decrementCount = id => {
    let found = basket.find(x => x.id == id)
    found.count == 1 ? found.count : found.count--
    setBasket([...basket])
  }
  const remove = id => {
    setBasket(basket.filter(x => x.id != id))
  }

  return <>
    <div className='row'>
      <ProductList
        items={products}
        onMove={moveToCart} />
      <Basket
        items={basket}
        onAdd={addCount}
        onDecrement={decrementCount}
        onRemove={remove}
      />
    </div>
  </>
}

export default App
