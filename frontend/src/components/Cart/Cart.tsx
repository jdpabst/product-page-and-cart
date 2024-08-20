import './Cart.css';

export default function Cart() {
 let cartCount = 0;


 return (
  <div>
   <h1>Your Cart ({cartCount})</h1>
   {cartCount !== 0 ?
    <div>

    </div> :
    <div>
     <div>
      <img src='/assets/images/illustration-empty-cart.svg' />
      <p>Your added items will appear here</p>
     </div>
    </div>}
  </div>
 )
}