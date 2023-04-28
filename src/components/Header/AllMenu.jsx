import { useRef } from "react";
import { Search } from "../../svg";
import { menu, create } from "../../data/allmenu";
import Items from "./Items";
import useClickOutside from "../../../helpers/Clickout";

const AllMenu = () => {
  const ref = useRef(null);
  useClickOutside(ref, () => {
    ref.current.style.visibility = "hidden";
  });
  return (
    <div className="allmenu" ref={ref}>
      <h1 className="allmenu__head">Menu</h1>
      <div className="allmenu__wrapper">
        <div className="allmenu__box">
          <div className="search1 menu1">
            <Search />
            <input type="text" placeholder="Search Menu" />
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">Social</h3>
            {menu.slice(0, 6).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">Entertaiment</h3>
            {menu.slice(6, 9).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">Shopping</h3>
            {menu.slice(9, 11).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">Personal</h3>
            {menu.slice(11, 15).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">Professionals</h3>
            {menu.slice(15, 17).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">Community And Resource</h3>
            {menu.slice(17, 21).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
          <div className="allmenu__group">
            <h3 className="allmenu__group--header">More From Meta</h3>
            {menu.slice(21, 23).map((menu, i) => {
              return (
                <Items
                  key={i}
                  name={menu.name}
                  icon={menu.icon}
                  description={menu.description}
                />
              );
            })}
          </div>
        </div>
        <div className="allmenu__right">
          <h2 className="heading">Create</h2>
          {create.map((item, i) => (
            <div className="list" key={i}>
              <div className="list__circle">
                <i className={item.icon}></i>
              </div>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMenu;
