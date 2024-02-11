import React from "react";
import { Link } from "react-router-dom";
import { menu as menuData } from "../../utils/menuData.js";
import "./Menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      {menuData.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((itemChild) => {
            return (
              <Link key={itemChild.id} className="listItem" to={itemChild.url}>
                <span className="icon">{itemChild.icon}</span>
                <span>{itemChild.title}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
