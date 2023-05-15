import React, { useState } from "react";
import Store from "./Store";
import { Address, Restaurant } from "./resturant";
import BestMenu from "./BestMenu";

let data: Restaurant = {
  name: "누나네 식당",
  category: "western",
  address: {
    city: "incheon",
    detail: "somewhere",
    zipCode: 23425634,
  },
  Menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "steak" },
  ],
};

const App: React.FC = () => {
  const [myrestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myrestaurant, address: address });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={data} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" price={1000} showBestMenuName={showBestMenuName} />
    </div>
  );
};
