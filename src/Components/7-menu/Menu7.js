
import React, { useState } from 'react';
import Menu from './Menu';
import './main7.css';

import items from './data';
import Categories from './Categories'

function Menu7() {
  const [menuItems , setMenuItems] = useState(items);
  const [categories,setcategories] = useState([]);


  const filterItems = (category) =>{
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='underline'> </div>
       
      </div>
      <Categories filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  )
}

export default Menu7
