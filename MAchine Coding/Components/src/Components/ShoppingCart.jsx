import React ,{useState , useEffect} from 'react'

const ShoppingCart = () => {
  const [cart,setCart]  = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple iPhone 14",
      category: "Electronics",
    price: 69999,
    rating: 4.7,
    stock: 25,
    brand: "Apple"
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    category: "Electronics",
    price: 64999,
    rating: 4.6,
    stock: 30,
    brand: "Samsung"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    category: "Accessories",
    price: 29999,
    rating: 4.8,
    stock: 15,
    brand: "Sony"
  },
  {
    id: 4,
    name: "Dell XPS 13 Laptop",
    category: "Computers",
    price: 119999,
    rating: 4.5,
    stock: 10,
    brand: "Dell"
  },
  {
    id: 5,
    name: "Nike Air Max 270",
    category: "Footwear",
    price: 12999,
    rating: 4.4,
    stock: 40,
    brand: "Nike"
  },
  {
    id: 6,
    name: "Adidas Ultraboost 22",
    category: "Footwear",
    price: 15999,
    rating: 4.6,
    stock: 35,
    brand: "Adidas"
  },
  {
    id: 7,
    name: "Boat Rockerz 550",
    category: "Accessories",
    price: 1999,
    rating: 4.2,
    stock: 60,
    brand: "Boat"
  },
  {
    id: 8,
    name: "Canon EOS 1500D DSLR Camera",
    category: "Cameras",
    price: 38999,
    rating: 4.5,
    stock: 12,
    brand: "Canon"
  },
  {
    id: 9,
    name: "Apple MacBook Air M1",
    category: "Computers",
    price: 99999,
    rating: 4.8,
    stock: 8,
    brand: "Apple"
  },
  {
    id: 10,
    name: "Samsung 55\" Smart LED TV",
    category: "Electronics",
    price: 55999,
    rating: 4.3,
    stock: 18,
    brand: "Samsung"
  }
]);

const addcart = (product) => {
    setCart(prev => {
        const exist =  prev.find((i) => i.id === product.id);
        if(exist){
            return prev.map((i) => i.id === product.id ? {...i , quantity: i.quantity +1} : i) 
        }

        return [...prev , {...product , quantity:1}]
    })

}

const remove = (id) => {
    setCart(prev => prev.filter((i) => i.id !== id) )
}



  return (
   <> 
   <div><h1>Products</h1></div>
    <div>
        {products.map((i) => (
            <div key={i.id}>
                <h1>{i.name}</h1>
                <p>Price : {i.price}</p>
                <p>{i.brand}</p>
                <p>{i.category}</p>
                <p>{i.rating}</p>
                <button onClick={() => addcart(i)}>Add to Cart</button>

            </div>
        ))}
        </div>

      <div><h1>Shopping Cart</h1></div> 
      <div>
        {cart.map((i) => (
            <div key={i.id}>
                <h1>{i.name}</h1>
                <p>Price : {i.price}</p>
                <p>{i.brand}</p>
                <p>{i.category}</p>
                <p>{i.rating}</p>
                <p>Quantity : {i.quantity}</p>
                <button onClick={() => remove(i.id)}>Remove from Cart</button>
                <p>Total :{i.price * i.quantity}</p>

        </div>
        ))}
        </div> 
        <p>Cart Total : {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
   </>
  )
}

export default ShoppingCart