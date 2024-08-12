import { useUserContext } from 'src/contexts/userStore';
import Cart from '../Cart/Cart';
import './Home.css';

export default function Home() {
 const { menu } = useUserContext();

 console.log(typeof (menu[0].price))

 const formatPrice = (price: string): string => {
  const numericPrice = Number(price);
  return numericPrice.toFixed(2);
 };



 return (
  <div>
   <div className='menu-items-container'>
    <ul>
     {menu.map(item => (
      <li>
       <div>
        <div>
         <img src={item.imageDesktop} />
         <button>
          <img src='./assets/images/icon-add-to-cart.svg' />
          Add to Cart
         </button>
        </div>
        <div>
         <p>{item.category}</p>
         <h1>{item.name}</h1>
         <h2>${formatPrice(item.price)}</h2>
        </div>
       </div>
      </li>
     ))}
    </ul>
   </div>
   < Cart />
  </div>
 )
}