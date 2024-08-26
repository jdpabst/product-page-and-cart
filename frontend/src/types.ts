export interface Menu {
 id: number;
 imageThumbnail: string;
 imageMobile: string;
 imageTablet: string;
 imageDesktop: string;
 name: string;
 category: string;
 price: string;
}

// export interface Cart {
//  id: number;
//  items?: CartItem[]
// }

// export interface CartItem {
//  id: number;
//  quantity: number;
// }

export type UserContextType = {
 menu: Menu[];
 setMenu: any;
 // cart: Cart[];
 // setCart: any;
 // cartItem: CartItem[];
 // setCartItem: any;
}

