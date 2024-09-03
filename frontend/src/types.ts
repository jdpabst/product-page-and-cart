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

export interface Cart {
 [key: number]: number
}

// export interface CartItem {
//  id: number;
//  quantity: number;
// }

export type UserContextType = {
 menu: Menu[];
 setMenu: any;
 cart: Cart;
 setCart: any;
 submitted: any;
 setSubmitted: any;
 // cartItem: CartItem[];
 // setCartItem: any;
}

