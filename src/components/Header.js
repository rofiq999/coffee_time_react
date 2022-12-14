import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// import css navbar
import styles from '../style/Header.module.css';
// import image
import icon_coffee from '../assets/img/coffee.png';
import icon_search from '../assets/img/search.png';
import icon_chat from '../assets/img/chat.png';
// import icon_profile from '../assets/img/profilsmall.png';

class Navbar extends Component {
  state = {
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/users/  `,
  };
  componentDidMount() {
    const getToken = localStorage.getItem('token');
    // console.log(getToken);
    Axios.get(this.state.url, {
      headers: {
        'x-access-token': getToken,
      },
    }).then((response) => {
      this.setState(
        {
          image: response.data.result.result[0].image,
        },
        () => {
          console.log(this.state);
        }
      );
    });
  }
  render() {
    return (
      <>
        <nav className="nav d-flex justify-content-between align-items-center mx-auto px-4">
          <div className={`${styles['left-nav']} d-flex py-4`}>
            <img src={icon_coffee} alt="" className="me-2" widht="30" height="30" />
            <span className="mt-1">Coffee Time</span>
          </div>
          <div className={`${styles['center-nav']} d-sm-none d-none  d-sm-none d-md-none d-lg-flex flex-row  `}>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/product" className="nav-link">
              Product
            </Link>
            <Link to="/payment" className="nav-link">
              Your Cart
            </Link>
            <Link to="/history" className="nav-link">
              History
            </Link>
          </div>
          <div className={`${styles['right-nav']} d-flex `}>
            <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none">
              <img src={icon_search} alt="" widht="30" height="30" />
            </Link>
            <Link to="#" className="nav-link d-none d-sm-block d-md-none d-lg-block d-sm-none">
              <img src={icon_chat} alt="" widht="30" height="30" />
            </Link>
            <Link to="/profile" className="nav-link">
              <img className={styles.img_userprofile} src={this.state.image} alt="" widht="30" height="30" />
            </Link>
            <Link to="#" className="nav-link d-lg-none d-sm-block">
              <span className={styles.burger}>
                <i class="bi bi-list fs-4"></i>
              </span>
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
