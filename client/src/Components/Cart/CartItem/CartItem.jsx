import './CartItem.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import img from '../../../assets/shoes/p2.png';

const CartItem = () => {
  return (
  <div className="cartItem">
     <div className="cartItem-image">
        <img src={img} alt="cartItem"/>
     </div>

     <div className="cartItem-content">
       <div className="cartItem-div">
         <div className="cartItem-title">
           Jordan Retro 6 G
         </div>
         <div className="cartItem-subtitle">
           MRP: RS 1200.00
         </div>
       </div>
       <div>
         Mens golf shoes
       </div>

       <div className="shoe-size-quantity">
         <div className="shoe-size-container">
           <div className="shoe-sizes">
             <div className="shoe-sizes-text"> Size: </div>
             <select>
               <option value="1">UK 6</option>
               <option value="2">UK 7</option>
               <option value="3">UK 8</option>
               <option value="4">UK 6.5</option>
               <option value="5">UK 4</option>
               <option value="6">UK 5</option>
             </select>
           </div>
           <div className="shoe-quantity">
             <div className="shoe-quantity-text">Quantity: </div>
             <select>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
             </select>
           </div>
         </div>

         <div className="delete-icon" onClick={() => {}}>
           <RiDeleteBin6Line size={20}/>
         </div>

       </div>

     </div>

  </div>
  );
}

export default CartItem;