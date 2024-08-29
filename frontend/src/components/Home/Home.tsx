import { useUserContext } from 'src/contexts/userStore';
import Cart from '../Cart/Cart';
import './Home.css';

export default function Home() {
 const { menu, cart, setCart } = useUserContext();

 const handleDecrement = (id) => {
  setCart((prev) => {
   const newCount = prev[id] - 1;
   if (newCount <= 0) {
    const { [id]: _, ...rest } = prev;
    return rest;
   }

   return {
    ...prev,
    [id]: newCount
   }
  })
 }

 const handleIncrement = (id) => {
  setCart((prev) => ({
   ...prev,
   [id]: (prev[id] || 0) + 1

  }))
 }

 const formatPrice = (price: string): string => {
  const numericPrice = Number(price);
  return numericPrice.toFixed(2);
 };

 const handleAddToCart = (id) => {
  setCart((prev) => ({
   ...prev,
   [id]: (prev[id] || 0) + 1
  }));

 }



 return (
  <div className='main-container'>

   <div className='menu-cart-container'>

    <h1 className='page-title'>Desserts</h1>

    <div className='menu-items-container'>

     <ul className='menu-items-list-container'>
      {menu.map((item, id) => (
       <li key={id}>
        <div className='menu-item-container'>

         {cart[id] ?

          <div className='menu-img-and-bttn-container'>

           <img style={{ 'border': '1.5px solid hsl(14, 86%, 42%)' }} className='product-img' src={item.imageDesktop} />

           <div className='added-item-bttn-container'>
            <button onClick={() => handleDecrement(id)} className='decrement-bttn'>
             <img className='decrement-img' src='/assets/images/icon-decrement-quantity.svg' />
            </button>

            <span>{cart[id]}</span>

            <button onClick={() => handleIncrement(id)} className='increment-bttn'>
             <img className='increment-img' src='/assets/images/icon-increment-quantity.svg' />
            </button>
           </div>

          </div>

          :

          <div className='menu-img-and-bttn-container'>

           <img className='product-img' src={item.imageDesktop} />

           <button className='add-to-cart-bttn' onClick={() => handleAddToCart(id)}>
            <img src='./assets/images/icon-add-to-cart.svg' />
            <span>Add to Cart</span>
           </button>

          </div>

         }
         {/* <button onClick={() => handleAddToCart(id)}>
           <img src='./assets/images/icon-add-to-cart.svg' />
           <span>Add to Cart</span>
          </button> */}

         <div className='menu-item-info-container'>
          <p>{item.category}</p>
          <h1>{item.name}</h1>
          <h2>${formatPrice(item.price)}</h2>
         </div>
        </div>
       </li>
      ))}
     </ul>

    </div>

   </div>
   < Cart formatPrice={formatPrice} />
  </div>

 )
}