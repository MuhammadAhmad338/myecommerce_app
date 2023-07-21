import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

const MyContext = ({ children }) => {

  const [gotProducts, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/getAllProducts`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchSingleProduct = async (id) => {
    try {
      console.log(id);
      const { data } = await axios.get(`http://localhost:3000/getProduct/${id}`);
      return data;
    } catch (error) {
      console.log('Error fetching single product:', error);
    }
  }

  const handleAddToCart = (product) => {
    let items = [...cartItems];
    let index = items.findIndex(item => item._id === product._id);
    if (index !== -1) {
      return;
    } else {
      items = [...items, product];
    }
    setCartItems(items);
  }

  const removeFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter(item => item._id !== product._id);
    setCartItems(items);
  }

  useEffect(() => {
    let subTotal = 0;
    for (let i = 0; i < cartItems.length; i++) {
     subTotal += cartItems[i].price;  
    }
    setCartSubTotal(subTotal);

    fetchProducts();
  }, [cartItems]);

  return <Context.Provider value={{ gotProducts, cartItems, cartSubTotal, fetchSingleProduct, handleAddToCart, removeFromCart }}>
    {children}
  </Context.Provider>
}

export { MyContext, Context };