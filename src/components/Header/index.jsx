import "./header.scss";
import {
  Logo,
  Search,
  Friends,
  HomeActive,
  Market,
  Home,
  Watch,
  Gaming,
  Menu,
  Messenger,
  Notifications,
  ArrowDown,
} from "../../svg";
import { Link } from "react-router-dom";
import SearchMenu from "./SearchMenu";
import { useState } from "react";
import AllMenu from "./AllMenu";
import UserMenu from "./UserMenu/index";
const color = "#67646b";
const Header = () => {
  const [visibile, setVisibile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const show = () => {
    setShowMenu(!showMenu);
  };
  const visibiler = () => {
    setVisibile(!visibile);
  };
  return (
    <>
      <header className="header p-1">
        <div className="header__right ">
          <Link to="/" className="header__logo">
            <Logo />
          </Link>
          <div className="header__search">
            <Search />
            <input
              type="text"
              placeholder="Search On FaceBook"
              className="header__input"
              onClick={visibiler}
            />
          </div>
        </div>
        {visibile && <SearchMenu />}

        <div className="header__middle">
          <Link to="/" className="middle__icon active">
            <HomeActive color={color} />
          </Link>
          <Link to="/" className="middle__icon">
            <Friends />
          </Link>
          <Link to="/" className="middle__icon">
            <Watch />
            <span className="absolute">9+</span>
          </Link>
          <Link to="/" className="middle__icon">
            <Market />
          </Link>
          <Link to="/" className="middle__icon">
            <Gaming />
          </Link>
        </div>
        <div className="header__left">
          <Link to="/profile" className="profile__link">
            <img
              src="./assets/images/default_profile.png"
              alt=""
              className="profile__img"
            />
            <span className="profile__name">Yhonnes</span>
          </Link>
          <div className="left__icons">
            <div className="circle__icon" onClick={show}>
              <div>
                <Menu />
              </div>
              {showMenu && <AllMenu />}
            </div>

            <div className="circle__icon">
              <Messenger />
            </div>
            <div className="circle__icon">
              <Notifications />
              <span className="notify__icon">4</span>
            </div>
            <div className="circle__icon">
              <ArrowDown />
              <UserMenu />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
