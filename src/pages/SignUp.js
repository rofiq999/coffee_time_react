import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import title from '../helper/title';

// import Router Link
import { Link } from 'react-router-dom';

import styles from '../style/SignUp.module.css';
import logo from '../assets/img/logo.png';
import coffee from '../assets/img/coffee.png';
import google from '../assets/img/google.png';

class SignUp extends Component {
  render() {
    title('SignUp');
    return (
      <Fragment>
        <main className={styles.container}>
          <aside className={styles['side-content']}>
            <img className={styles['side-image']} src={logo} height="900px" width="682px" alt="coffe-shop" />
          </aside>
          <section className={styles['from-content']}>
            <div className={styles['head']}>
              <a className={styles['left']}>
                <img src={coffee} alt="coffe-shop" />
                Coffee Time
              </a>
              <button className={styles['login']}>Login</button>
            </div>
            <p className={styles['sign']}>Sign Up</p>
            <section className={styles['register-form']} id="register">
              <form className={styles['full-width']}>
                <div className={styles['input-div']}>
                  <label>Email Address:</label>
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <div className={styles['input-div']}>
                  <label>Password:</label>
                  <input type="text" placeholder="Enter your Password" />
                </div>
                <div className={styles['input-div']}>
                  <label>Phone Number:</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
                <a className={styles['div-primary']}>
                  <Link to="/login"> Sign Up</Link>
                </a>
                <a className={styles['input-div-secondary']}>
                  <img src={google} alt="Google" />
                  <p>Sign Up with Google</p>
                </a>
              </form>
            </section>
          </section>
          <section className={styles['free-member']}>
            <div className={styles['member-card']}>
              <h2>Get your member card now!</h2>
              <p>Lets's join with our member and enjoy the deals.</p>
            </div>
            <a className={styles['btn-create']}>Create Now</a>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default SignUp;
