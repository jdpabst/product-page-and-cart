import { useUserContext } from 'src/contexts/userStore';
import Cart from '../Cart/Cart';
import './Home.css';

export default function Home() {
 const { menu, cart, setCart } = useUserContext();
 // const [cart, setCart] = useState([]);


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
         <div className='menu-img-and-bttn-container'>
          <img className='product-img' src={item.imageDesktop} />
          <button onClick={() => handleAddToCart(id)}>
           <img src='./assets/images/icon-add-to-cart.svg' />
           <span>Add to Cart</span>
          </button>
         </div>
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