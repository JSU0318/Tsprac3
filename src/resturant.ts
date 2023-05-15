export type Restaurant = {
  name: string;
  category: string;
  address: {
    city: string;
    detail: string;
    zipCode: number;
  };
  Menu: {
    name: string;
    price: number;
    category: string;
  }[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, "zipCode">;
export type RestaurantOnlyCategor = Pick<Restaurant, "category">;

// export type ApiResponse<T>{
//     data:T[]
//     totalPage:number,
//     page:number
// }

export type ResturantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
