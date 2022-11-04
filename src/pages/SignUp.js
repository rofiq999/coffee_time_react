import React, { Component, Fragment } from 'react';
import Footer from '../components/Footer';
import title from '../helper/title';

// import Router Link
import { Link } from 'react-router-dom';

import Axios from 'axios';

import styles from '../style/SignUp.module.css';
import logo from '../assets/img/logo.png';
import coffee from '../assets/img/coffee.png';
import google from '../assets/img/google.png';

class SignUp extends Component {
  state = {
    // input
    email: '',
    password: '',
    phone_number: '',
  };

  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value,
      // data: console.log(e.target.value), untuk debug input
    });
  };
  handlePasswordInput = (e) => {
    this.setState({
      password: e.target.value,
      // data: console.log(e.target.value), untuk debug input
    });
  };
  handlePhoneInput = (e) => {
    this.setState({
      phone_number: e.target.value,
      // data: console.log(e.target.value), untuk debug input
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userObj = {
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phone_number,
    };
    Axios.post(`${process.env.REACT_APP_BACKEND_HOST}/coffe_time/users/`, userObj)
      .then((res) => {
        console.log(res.data);
        this.props.navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ email: '', password: '', phone_number: '' });
  };

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
              <form className={styles['full-width']} onSubmit={this.onSubmit}>
                <div className={styles['input-div']}>
                  <label>Email Address:</label>
                  <input onChange={this.handleEmailInput} value={this.state.email} type="email" name="email" id="email" placeholder="Enter your email address" required />
                </div>
                <div className={styles['input-div']}>
                  <label>Password:</label>
                  <input onChange={this.handlePasswordInput} value={this.state.password} type="password" name="password" id="password" placeholder="Enter your password" required />
                </div>
                <div className={styles['input-div']}>
                  <label>Phone Number:</label>
                  <input onChange={this.handlePhoneInput} value={this.state.phone_number} type="tel" name="phone_number" id="phone_number" placeholder="Enter your phone number" required />
                </div>
                <a className={styles['div-primary']}>
                  <button type="sumbit"> Sign Up</button>
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
