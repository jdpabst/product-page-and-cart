import { useUserContext } from 'src/contexts/userStore';
import Cart from '../Cart/Cart';
import './Home.css';

export default function Home() {
 const { menu } = useUserContext();


 return (
  <div>
   <div className='menu-items-container'>
    <ul>
     {menu.map(item => (
      <li>{item.name}</li>
     ))}
    </ul>
   </div>
   < Cart />
  </div>
 )
}