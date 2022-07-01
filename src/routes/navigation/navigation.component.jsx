import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/083 crown.svg";
import "./navigation.styles.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-links' to='/shop'>
            Shop
          </Link>
          <Link className='nav-links' to='/auth'>
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
