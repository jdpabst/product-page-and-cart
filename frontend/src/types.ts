export interface Menu {
 id: number;
 imageThumbnail: string;
 imageMobile: string;
 imageTablet: string;
 imageDesktop: string;
 name: string;
 category: string;
 price: string
}

export type UserContextType = {
 menu: Menu[];
 setMenu: any;
}

