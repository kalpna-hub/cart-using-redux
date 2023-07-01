import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart,checkout } from "../redux/actions/cartActions";
 
 

const CartPage=()=>{
    const [checkoutSuccess,setCheckoutSuccess]=useState('')
    const {cart}=useSelector(state=>state.cart);
    const dispatch=useDispatch();
     
    const totalPrice=cart.reduce((total,product)=>total+product.price,0)
   
    return(
        <div>
          <h1 style={{marginLeft:'40vw'}}>My Cart</h1>
         <div className='mainContainer'>
         <div className="container1">  
            {
               cart.map(item=>(
                <div key={item.id} className="card">
                   <h3>{item.title}</h3>
                   <img src={item.thumbnail} alt={item.title} style={{width:"200px"}}/> 
                            <p><strong>Description:</strong>{item.description}</p>
                            <p><strong>₹{item.price}</strong></p>
                            <button
                              onClick = {() => dispatch(removeFromCart(item.id)
                                 
                                 )}
                            >Remove From Cart</button>
                           
                </div>
                
               ))
            }
            </div>
            <div className="checkout">
               {
                  cart.map((item)=>(
                     <div>
                        <div className="flex">
                           <p>{item.title}</p>
                           <p>:</p>
                           <p><strong> ₹{item.price}</strong></p>
                           </div>
                     </div>
                  ))
               }
               <hr></hr>
               <div className="flex">
               <h3>Total Price</h3>
               <p>:</p>
               <p><strong> ₹{totalPrice}</strong></p>
            </div>
               <hr></hr>
             
            <button className='btn' onClick={()=>{dispatch(checkout())
           setCheckoutSuccess('All items have been checkout')
            }} style={{margin:"5px" ,width: '100%'}}>Checkout</button>
            {
               checkoutSuccess&&(<h3 style={{color: 'green', paddingTop: '10px'}}>{checkoutSuccess}</h3>)
            }
            </div>
        
         </div>
        </div>
    )
}
export default CartPage;