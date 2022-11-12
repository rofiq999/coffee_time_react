import React, { Component, Fragment } from 'react';
import styles from '../../style/NewProduct.module.css';
import Navbar from '../../components/Header';
import NavbarNotLogin from '../../components/HeaderNotLogin';
import NavbarAdmin from '../../components/HeaderAdmin';
import Footer from '../../components/Footer';

import camera from '../../assets/img/camera.png';

class NewProduct extends Component {
  state = {
    products: [],
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
    navLogin: <Navbar />,
    navAdmin: <NavbarAdmin />,
    navnotLogin: <NavbarNotLogin />,
  };
  navType = () => {
    if (this.state.token) {
      if (this.state.role === 'user') {
        return this.state.navLogin;
      } else {
        return this.state.navAdmin;
      }
    } else {
      return this.state.navnotLogin;
    }
  };
  render() {
    return (
      <>
        <this.navType />
        <main className="container-fluid">
          <div className="container mb-5">
            <section>
              <div className="row d-flex justify-content-between">
                <p>
                  Favorite & Promo <span className={styles['text']}> Add new product</span>
                </p>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 mx-auto d-flex align-items-center ">
                  <div className="">
                    <div className={`${styles['content-left']} mt-5 d-flex justify-content-center`}>
                      <div className="pt-5">
                        <img src={camera} alt="camera" />
                      </div>
                    </div>
                    <div className="mt-5 ">
                      <button className={styles['btn-picture']}>Take a picture</button>
                    </div>
                    <button className={`${styles['btn-galery']} mt-4 `}>Chose from gallery</button>
                    <h5 className={`${styles['delivery']} mt-5`}>Delivery Hour :</h5>
                    <select className={`${styles['delivery-border']} form-select w-100`} aria-label="Default select example" disabled>
                      <option selected>Select start hour</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select className={`${styles['delivery-border']} form-select w-100 mt-3`} aria-label="Default select example" disabled>
                      <option selected>Select end hour</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <h5 className={`${styles['stock']} mt-5`}>Input stock :</h5>
                    <select className={`${styles['stock-input']} form-select w-100 mt-3`} aria-label="Default select example">
                      <option selected>Input stock</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mx auto">
                  <div className={`${styles['bor']} row d-block pt-5 ps-5 `}>
                    <div className="form-input w-75 pt-5 ">
                      <label className={styles['form-label']}>Name :</label>
                      <input type="text" className={`${styles['form-control']} h-75`} placeholder="type product name min.50 characters" />
                    </div>
                    <div className="form-input w-75 pt-4 ">
                      <label className={styles['form-label']}>Price :</label>
                      <input type="tel" className={`${styles['form-control']} h-75`} placeholder="type the price" />
                    </div>
                    <div className="form-input w-75 pt-4 ">
                      <label className={styles['form-label']}>Description :</label>
                      <input type="text" className={`${styles['form-control']} h-75`} placeholder="describe your product min. 150 characters" />
                    </div>
                    <h6 className={styles['size']}>Input product size :</h6>
                    <p className={styles['detail']}>Click methods you want to use for this product</p>
                    <div className="row gap-3 ms-1">
                      <div className={styles['size-chil']}>R</div>
                      <div className={styles['size-chil']}>L</div>
                      <div className={styles['size-chil-xl']}>XL</div>
                    </div>
                    <h6 className={styles['size']}>Input delivery methods</h6>
                    <p className={styles['detail']}>Click methods you want to use for this product</p>
                    <div className="row gap-1">
                      <div className={styles['delivery-methods']}>Home Delivery</div>
                      <div className={styles['delivery-methods']}>Dine in</div>
                      <div className={styles['delivery-methods-ways']}>Take away</div>
                    </div>
                    <div className="row d-flex flex-column pt-5">
                      <button className={styles['save']}>Save Product</button>
                      <button className={styles['cancel']}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default NewProduct;
