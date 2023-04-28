import { ArrowRight, Return, Search } from "../../svg";
import { useRef } from "react";
import useClickOutSide from "../../../helpers/Clickout";
const SearchMenu = () => {
  const element = useRef(null);
  useClickOutSide(element, () => {
    element.current.style.visibility = "hidden";
    element.current.style.opacity = "0";
  });

  return (
    <div className="search" ref={element}>
      <div className="search2">
        <Return />
        <div className="search1">
          <input
            type="text"
            placeholder="Search On FaceBook"
            className="search__input1"
          />
        </div>
      </div>

      <div className="search__wrapper">
        <div className="search__head">
          <h4 className="heading">Recent Search</h4>
          <p>edit</p>
        </div>
        <div className="search__user">
          <figure className="search__figure">
            <img
              src="./assets/stories/profile5.png"
              className="search__img"
              alt=""
            />
            <figcaption className="search__name">Jhon Doe</figcaption>
          </figure>
          <p>X</p>
        </div>
      </div>
    </div>
  );
};

export default SearchMenu;
