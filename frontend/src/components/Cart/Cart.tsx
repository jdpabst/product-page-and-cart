import './Cart.css';

export default function Cart() {
 let cartCount = 0;


 return (
  <div className='main-cart-container'>
   <div className='cart-container'>
    <h1 className='cart-title'>Your Cart ({cartCount})</h1>
    {cartCount !== 0 ?
     <div>

     </div> :
     <div className='cart-contents'>
      <img className='empty-cart-img' src='/assets/images/illustration-empty-cart.svg' />
      <p>Your added items will appear here</p>
     </div>}
   </div>
  </div>

 )
}