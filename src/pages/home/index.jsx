import Header from "../../components/Header";

import useClickOutSide from "../../../helpers/Clickout";
import { useRef, useState } from "react";
const Home = () => {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutSide(el, () => {
    setVisible(false);
  });
  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
