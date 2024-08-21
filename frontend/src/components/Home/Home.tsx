import { useUserContext } from 'src/contexts/userStore';
import Cart from '../Cart/Cart';
import './Home.css';

export default function Home() {
 const { menu } = useUserContext();

 // if (menu.length > 0) {
 //  console.log(menu[0].price);
 // } else {
 //  console.log('Menu is empty or still loading.');
 // }


 const formatPrice = (price: string): string => {
  const numericPrice = Number(price);
  return numericPrice.toFixed(2);
 };



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
          <button>
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
   < Cart />
  </div>

 )
}