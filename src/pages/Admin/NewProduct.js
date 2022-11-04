import React, { Component, Fragment } from 'react';
import styles from '../../style/NewProduct.module.css';

import camera from '../../assets/img/camera.png';

class NewProduct extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-4 ps-5 ">
              <p>
                Favorite & Promo <span className={styles['text']}> Add new product</span>
              </p>
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
              <select class="form-select w-50" aria-label="Default select example">
                <option selected>Select start hour</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="form-select w-50 mt-3" aria-label="Default select example">
                <option selected>Select end hour</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <h5 className={`${styles['stock']} mt-5`}>Input stock :</h5>
              <select class="form-select w-50 mt-3" aria-label="Default select example">
                <option selected>Input stock</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-8 bg-warning">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewProduct;
