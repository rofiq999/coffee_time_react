import React, { Component, Fragment } from 'react';
import styles from '../../style/EditPromo.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Spagheti from '../../assets/img/spageti.png';

class NewProduct extends Component {
  render() {
    return (
      <>
        <Header />
        <main className="container-fluid">
          <div className="container mb-5">
            <div className="row d-flex justify-content-between">
              <p>
                Favorite & Promo <span className={styles['text']}>Edit Promo</span>
              </p>
              <div className="col-3 col-lg-4 col-md-4 col-sm-12 mx-auto d-flex justify-content-start align-items-center ">
                <aside class={`${styles.promo_left} mx-auto text-center  d-flex flex-column justify-content-start align-items-center pt-5`}>
                  <section class={styles.card__promo}>
                    <div class={`${styles.promo} pb-4`}>
                      <article>
                        <div class={`${styles.promo_card} text-wrap p-4`}>
                          <img class="img-thumbnail rounded-circle m-3 w-50" src={Spagheti} alt="promo" />
                          <h3 class="fs-4 fw-bold lh-base">
                            Beef Spaghetti <br /> 20% OFF
                          </h3>
                          <p class="fs-6 fw-light lh-sm">
                            Buy 1 Choco Oreo and get 20% off <br /> for Beef Spaghetti
                          </p>
                        </div>
                        <p class="fs-5 pt-3">COUPON CODE</p>
                        <h2 class="fw-bolder fs-3 pb-2">FNPR15RG</h2>
                        <p class="fs-6 fw-lighter">Valid untill October 30th 2022</p>
                      </article>
                    </div>
                    <h5 className={`${styles['text-promo']} text-start`}>Expire Date :</h5>
                    <select class="form-select w-100 mt-3 " aria-label="Default select example">
                      <option selected>October 7th 2020</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <select class="form-select w-100 mt-3 " aria-label="Default select example">
                      <option selected>October 10th 2020</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <h5 className={`${styles['text-promo']} text-start pt-5`}>Input promo code :</h5>
                    <select class="form-select w-100 mt-3 " aria-label="Default select example">
                      <option selected>FNPR15RG</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </section>
                </aside>
              </div>
              <div className="col-8 col-lg-8 col-md-8 col-sm-12 mx auto">
                <div className={`${styles['bor']} row d-block pt-5 ps-5 `}>
                  <div className="form-input w-75 pt-5 ">
                    <label className={styles['form-label']}>Name :</label>
                    <input type="text" className="form-control h-75" placeholder="type product name min.50 characters" />
                  </div>
                  <div className="form-input w-75 pt-4 ">
                    <label className={styles['form-label']}>Price :</label>
                    <input type="tel" className="form-control h-75" placeholder="type the normal price" />
                  </div>
                  <div className="form-input w-75 pt-4 ">
                    <label className={styles['form-label']}>Description :</label>
                    <input type="text" className="form-control h-75" placeholder="describe your promo min. 150 characters" />
                  </div>
                  <h6 className={styles['size']}>Input product size :</h6>
                  <p className={styles['detail']}>Click methods you want to use for this product</p>
                  <div className="row gap-3 ms-1">
                    <div className={styles['size-chil']}>R</div>
                    <div className={styles['size-chil']}>L</div>
                    <div className={styles['size-chil-xl']}>XL</div>
                    <div className={styles['size-chil-gr']}>250 gr</div>
                    <div className={styles['size-chil-gr']}>300 gr</div>
                    <div className={styles['size-chil-gr']}>500 gr</div>
                  </div>
                  <h6 className={styles['size']}>Input delivery methods</h6>
                  <p className={styles['detail']}>Click methods you want to use for this product</p>
                  <div className="row gap-1">
                    <div className={styles['delivery-methods']}>Home Delivery</div>
                    <div className={styles['delivery-methods']}>Dine in</div>
                    <div className={styles['delivery-methods-ways']}>Take away</div>
                  </div>
                  <h5 className={`${styles['text-promo']} text-start pt-5 `}>Expire Date :</h5>
                  <select class="form-select w-50 mt-3 " aria-label="Default select example">
                    <option selected>20%</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div className="row d-flex flex-column pt-5">
                    <button className={styles['save']}>Save Change</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default NewProduct;
