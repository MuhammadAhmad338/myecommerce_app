import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Context = createContext();

const MyContext = ({ children }) => {

  const [gotProducts, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/getAllProducts`);
      setProducts(data); 
    } catch (error) {
      console.log(error);
    }
  }

  const fetchSingleProduct = async ( id ) => {
    try {
      console.log(id);
      const { data } = await axios.get(`http://localhost:3000/getProduct/${id}`);
      return data;
    } catch(error) {
      console.log('Error fetching single product:', error);
    }
  } 

  useEffect(() => {
    fetchProducts(); 
  }, []);

  return <Context.Provider value={{ gotProducts, fetchSingleProduct }}>
    { children }
  </Context.Provider>
}

export { MyContext, Context };