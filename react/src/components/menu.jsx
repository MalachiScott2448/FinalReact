import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menuitems from './menu-items';

const Menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/api/menu")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  // Function to generate image URL from item_name
  const getImageUrl = (itemName) => {
    const formattedName = itemName.replace(/\s+/g, '').toLowerCase();
    return `media/${formattedName}.jpg`;
  };

  useEffect(() => {
    data.forEach(item => {
      console.log(item.menu_id);
    });
  }, [data]);

  const menuData = data.map(item => (
    <Link to={`/menu-items/${item.menu_id}`} key={item.menu_id}>
      <Menuitems
        img={getImageUrl(item.item_name)}
        price={item.price}
        desc={item.description}
        item_name={item.item_name}
      />
    </Link>
  ));

  return (
    <main className="main">
      <div className="container">
        <div className="row row-cols-md-3">
          {menuData}
        </div>
      </div>
    </main>
  );
};

export default Menu;
