import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../Store/UI-slice";

const MainHeader = (props) => {
  const cartstate = useSelector((state) => state.uiStore.cartModalOpen);
  const dispatch = useDispatch();
  const open = uiActions.openmodal();
  const close = uiActions.closemodal();

  const onclickHandler = () => {
    if (cartstate === "false") {
      dispatch(open);
    } else {
      dispatch(close);
    }
  };
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onclick={onclickHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
