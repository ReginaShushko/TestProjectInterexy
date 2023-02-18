import { FC } from "react";
import { bool } from "prop-types";
import { Navigation } from "../../page/homePage/styles";

type MenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu: FC<MenuProps> = ({ open, setOpen }) => {
  return (
    <Navigation open={open} onClick={() => setOpen(!open)}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Our team</a>
        </li>
        <li>
          <a href="/contact">Contact us</a>
        </li>
      </ul>
    </Navigation>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
