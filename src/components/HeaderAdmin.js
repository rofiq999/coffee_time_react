import React from 'react';
import { Link } from 'react-router-dom';
// import css navbar
import styles from '../style/HeaderAdmin.module.css';
// import image
import icon_coffee from '../assets/img/coffee.png';
import icon_search from '../assets/img/search.png';
import icon_chat from '../assets/img/chat.png';
// import icon_profile from "../assets/image/main/img_userprofile.png";

function NavbarAdmin() {
  //    const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
  return (
    <>
      <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
        <Link to="/" className={`${styles['left-nav']} d-flex py-4`}>
          <img src={icon_coffee} alt="icon_coffee" className="me-2" widht="30" height="30" />
          <span className="mt-1">Coffee Time</span>
        </Link>
        <div className={`${styles['center-nav']} d-sm-none d-none d-sm-none d-md-none d-lg-flex flex-row`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/productadmin" className="nav-link">
            Product
          </Link>
          <Link to="#" className="nav-link">
            Order
          </Link>
          <Link to="#" className="nav-link">
            Dashboard
          </Link>
        </div>
        <div className={`${styles['right-nav']} d-flex`}>
          <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none">
            <img src={icon_search} alt="" widht="30" height="30" />
          </Link>
          <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none">
            <img src={icon_chat} alt="" widht="30" height="30" />
          </Link>
          <Link
            className="nav-link "
            onClick={() => {
              // navigate("/");
              localStorage.removeItem('token');
              window.location('/');
            }}
          >
            <span className="btn btn-secondary bg-warning">Logout</span>
          </Link>

          {/* logika jika admin profile tidak ada */}
          <Link to="#" className="nav-link d-lg-none d-sm-block">
            <span className={styles.burger}>
              <i className="bi bi-list fs-4"></i>
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarAdmin;
