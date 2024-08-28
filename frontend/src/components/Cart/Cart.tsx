import { useUserContext } from 'src/contexts/userStore';
import './Cart.css';

export default function Cart(props) {
 const { cart, menu, setCart } = useUserContext();

 const { formatPrice } = props;

 const cartItems = Object.keys(cart);
 const count = Object.values(cart).reduce((acc, quantity) => acc + quantity, 0);
 const cartCount = count;

 const handleIndividualTotal = (itemId) => {
  const item = menu[Number(itemId)];
  const quantity = cart[Number(itemId)];

  if (!item || !quantity) return 0;

  const total = Number(item.price) * quantity;
  return total.toFixed(2);

 }

 const handleRemoveItemFromCart = (id) => {
  const newCart = { ...cart }
  delete newCart[id];
  setCart(newCart)
 }



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

        const itemTotal = handleIndividualTotal(itemId);
        return (
         <li key={id} className='added-cart-item'>
          <p className='cart-item-title'>{menuItem.name}</p>
          <div className='cart-item-price-container'>
           <p style={{ fontWeight: 'bold', color: 'hsl(14, 86%, 42%)' }}>{cart[itemId]}x</p>
           <p>@ ${formatPrice(menuItem.price)}</p>
           <p style={{ fontWeight: 'bold' }}>{itemTotal}</p>
          </div>
          <button onClick={() => handleRemoveItemFromCart(itemId)} className='remove-item-from-cart-bttn'>
           <img src='/assets/images/icon-remove-item.svg' />
          </button>

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