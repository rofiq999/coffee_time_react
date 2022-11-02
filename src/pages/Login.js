// import React, { Component, Fragment } from 'react';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import withNavigate from '../helper/withNavigate';
import axios from 'axios';
import styles from '../style/Login.module.css';
import title from '../helper/title';

// import Router Link
import { Link } from 'react-router-dom';

//import image
import logo from '../assets/img/logo.png';
import coffee from '../assets/img/coffee.png';
import google from '../assets/img/google.png';
import facebook from '../assets/img/Facebook.png';
import twitter from '../assets/img/Twitter.png';
import instagram from '../assets/img/Instagram.png';

import { Icon } from 'react-icons-kit';
import { view } from 'react-icons-kit/ikons/view';
import { view_off } from 'react-icons-kit/ikons/view_off';

function Login() {
  const navigate = useNavigate();

  //show password

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(view_off);

  //get token
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //handle eye password
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(view);
      setType('text');
    } else {
      setIcon(view_off);
      setType('password');
    }
  };

  //get token localstorage
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_HOST}coffe_time/auth`, {
        email,
        password,
      })
      .then((response) => {
        alert('Login Success');
        console.log(response.data.result.data.token);
        localStorage.setItem('token', JSON.stringify(response.data.result.data.token));
        navigate('/');
      })
      .catch((err) => {
        alert('Email or Password is WRONG !!!');
        console.log(err);
      });
  };
  title('Login');
  return (
    <>
      <main className={styles.container}>
        <aside className={styles['side-content']}>
          <img className={styles['side-image']} src={logo} height="900px" width="682px" alt="coffe-shop" />
        </aside>
        <section className={styles['from-content']}>
          <div className={styles['head']}>
            <a href="#" className={styles['coffee-left']}>
              <img src={coffee} alt="coffe-shop" />
              Coffee Time
            </a>
            <button className={styles['login']}>Sign Up</button>
          </div>
          <p className={styles['sign']}>Login</p>
          <section className={styles['register-form']} id="register">
            <form className={styles['full-width']} onSubmit={handleApi}>
              <div className={styles['input-div']}>
                <label>Email Address:</label>
                <input className={styles['input-label']} type="text" placeholder="Enter your email address" onChange={handleEmail} />
              </div>
              <div className={styles['input-div']}>
                <label>Password:</label>
                <input type={type} className={styles['input-label']} placeholder="Enter your Password" onChange={handlePassword} />
                <span />
                <span onClick={handleToggle}>
                  Show Password
                  <Icon icon={icon} />
                </span>
              </div>
              <Link to="/forgotpass" id="forgot-pass">
                Forgot Password?
              </Link>
              <button className={styles['input-div-primary']}>
                <a className={styles['link-login']}>Login</a>
              </button>
              <button className={styles['input-div-secondary']}>
                <img src={google} alt="Google" />
                <p className={styles['with-google']}>Login with Google</p>
              </button>
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
      <footer className={styles['foot']}>
        <div className={styles['sosmed-detail']}>
          <div className={styles['box']}>
            <div className={styles['back-logo']}></div>
            <img className={styles['img-logo']} src={facebook} alt="facebook" />
          </div>
          <div className={styles['box']}>
            <div className={styles['back-logo']}></div>
            <img className={styles['img-logo']} src={twitter} alt="twitter" />
          </div>
          <div className={styles['box']}>
            <div className={styles['back-logo']}></div>
            <img className={styles['img-logo']} src={instagram} alt="instagram" />
          </div>
        </div>
        <section className={styles['footer-left']}>
          <div className={styles['logo-detail']}>
            <img className={styles['image-detail']} src={coffee} alt="coffee" />
            <h5>Coffee Time</h5>
          </div>
          <p className={styles['text-content']}>Coffee shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
          <p className={styles['text-copyright']}>@2022CoffeeStore</p>
        </section>
        <div className={styles['footer-right']}>
          <aside className={styles['address']}>
            <h2>Product</h2>
            <ol>
              <li>Download</li>
              <li>Locations</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Countries</li>
            </ol>
          </aside>
          <aside className={styles['address']}>
            <h2>Engage</h2>
            <ol>
              <li>Coffee Shop?</li>
              <li>FAQ</li>
              <li>Terms of Service</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
            </ol>
          </aside>
        </div>
      </footer>
    </>
  );
}

export default Login;
// class Login extends Component {
//   render() {
//     title('Login');
//     return (
//       <Fragment>
//         <main className={styles.container}>
//           <aside className={styles['side-content']}>
//             <img className={styles['side-image']} src={logo} height="1100px" width="682px" alt="coffe-shop" />
//           </aside>
//           <section className={styles['from-content']}>
//             <div className={styles['head']}>
//               <a href="#">
//                 <img src={coffee} alt="coffe-shop" />
//               </a>
//               <a href="#" className={styles['coffee']}>
//                 Coffee Time
//               </a>
//             </div>
//             <button className={styles['login']}>Sign Up</button>
//             <p className={styles['sign']}>Login</p>
//             <section className={styles['register-form']} id="register">
//               <form className={styles['full-width']}>
//                 <div className={styles['input-div']}>
//                   <label>Email Address:</label>
//                   <input className={styles['input-label']} type="text" placeholder="Enter your email address" />
//                 </div>
//                 <div className={styles['input-div']}>
//                   <label>Password:</label>
//                   <input className={styles['input-label']} type="text" placeholder="Enter your Password" />
//                 </div>
//                 <a href="#" id="forgot-pass">
//                   Forgot Password?
//                 </a>
//                 <button className={styles['input-div-primary']}>
//                   <a className={styles['link-login']}>
//                     <Link to="/"> Login</Link>
//                   </a>
//                 </button>
//                 <button className={styles['input-div-secondary']}>
//                   <img src={google} alt="Google" />
//                   <p>Login with Google</p>
//                 </button>
//               </form>
//             </section>
//           </section>
//           <section className={styles['free-member']}>
//             <div className={styles['member-card']}>
//               <h2>Get your member card now!</h2>
//               <p>Lets's join with our member and enjoy the deals.</p>
//             </div>
//             <a className={styles['btn-create']}>Create Now</a>
//           </section>
//         </main>
//         <footer>
//           <div className={styles['sosmed-detail']}>
//             <div className={styles['box']}>
//               <div className={styles['back-logo']}></div>
//               <img className={styles['img-logo']} src={facebook} alt="facebook" />
//             </div>
//             <div className={styles['box']}>
//               <div className={styles['back-logo']}></div>
//               <img className={styles['img-logo']} src={twitter} alt="twitter" />
//             </div>
//             <div className={styles['box']}>
//               <div className={styles['back-logo']}></div>
//               <img className={styles['img-logo']} src={instagram} alt="instagram" />
//             </div>
//           </div>
//           <section className={styles['footer-left']}>
//             <div className={styles['logo-detail']}>
//               <img className={styles['image-detail']} src={coffee} alt="coffee" />
//               <h5>Coffee Time</h5>
//             </div>
//             <p className={styles['text-content']}>Coffee shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
//             <p className={styles['text-copyright']}>@2022CoffeeStore</p>
//           </section>
//           <div className={styles['footer-right']}>
//             <aside className={styles['address']}>
//               <h2>Product</h2>
//               <ol>
//                 <li>Download</li>
//                 <li>Locations</li>
//                 <li>Blog</li>
//                 <li>Pricing</li>
//                 <li>Countries</li>
//               </ol>
//             </aside>
//             <aside className={styles['address']}>
//               <h2>Engage</h2>
//               <ol>
//                 <li>Coffee Shop?</li>
//                 <li>FAQ</li>
//                 <li>Terms of Service</li>
//                 <li>About Us</li>
//                 <li>Privacy Policy</li>
//               </ol>
//             </aside>
//           </div>
//         </footer>
//       </Fragment>
//     );
//   }
// }
// export default Login;
