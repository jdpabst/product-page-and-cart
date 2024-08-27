import './Cart.css';

export default function Cart(props) {
 const { cart, menu } = props;
 const cartItems = Object.keys(cart);
 const cartCount = cartItems.length;


 return (
  <div className='main-cart-container'>
   <div className='cart-container'>
    <h1 className='cart-title'>Your Cart ({cartCount})</h1>
    {cartCount !== 0 ? (
     <div className='added-cart-items-container'>
      <ul className='added-cart-items-list'>
       {cartItems.map((itemId, id) => {
        const menuItem = menu[itemId];
        if (!menuItem) {
         console.warn(`Menu item with id ${itemId} not found`);
         return null;
        }
        return (
         <li key={id} className='added-cart-item'>
          {menuItem.name}  x{cart[itemId]}
         </li>
        );
       })}
      </ul>
     </div>
    ) : (
     <div className='cart-contents'>
      <img className='empty-cart-img' src='/assets/images/illustration-empty-cart.svg' />
      <p>Your added items will appear here</p>
     </div>
    )}
   </div>
  </div>

 )
}