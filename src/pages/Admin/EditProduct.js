import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import withParams from '../../helper/withRouteParams';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../../style/NewProduct.module.css';
import Navbar from '../../components/Header';
import NavbarNotLogin from '../../components/HeaderNotLogin';
import NavbarAdmin from '../../components/HeaderAdmin';
import Footer from '../../components/Footer';

// import camera from '../../assets/img/camera.png';

class NewProduct extends Component {
  state = {
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/${this.props.params.id}`,
    product_name: '',
    price: '',
    description: '',
    stock: '',
    category: '',
    image: '',
    imagePreview: '',
    display: 'https://res.cloudinary.com/dx7cvqczn/image/upload/v1668147344/coffee_addict/pic_default_product.png',
    navLogin: <Navbar />,
    navAdmin: <NavbarAdmin />,
    navnotLogin: <NavbarNotLogin />,
  };

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    Axios.get(this.state.url)
      .then((response) => {
        console.log(response.data.result.data[0].image);
        this.setState({
          product_name: response.data.result.data[0].product_name,
          image: response.data.result.data[0].image,
          description: response.data.result.data[0].description,
          size: response.data.result.data[0].size,
          stock: response.data.result.data[0].stock,
          price: response.data.result.data[0].price,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectImage = () => {
    if (!this.state.image) return this.state.display;
    return this.state.image;
  };

  handleFile = (e) => {
    // e.preventDefault();
    let file = e.target.files[0];
    let preview = URL.createObjectURL(e.target.files[0]);
    // console.log(file);
    this.setState({ image: preview });
    this.setState({ imagePreview: file });
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
  };

  costing = (price) => {
    return parseFloat(price)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  };

  navType = () => {
    const getToken = localStorage.getItem('token');
    if (getToken) {
      if (this.state.role === 'admin') {
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
                        <img className={styles['image']} src={this.selectImage()} alt="camera" />
                      </div>
                    </div>
                    <div className="mt-5 ">
                      <button className={styles['btn-picture']}>Take a picture</button>
                    </div>
                    <div className="">
                      <label for="img_product" className={`${styles['btn-galery']} mt-4 pt-2 text-center `}>
                        Chose from gallery
                      </label>
                      <input className={styles['image-product']} type="file" name="file" id="img_product" onChange={(e) => this.handleFile(e)} />
                    </div>
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
                    <div className="mt-3 w-100 d-flex align-item-center justify-content-center mb-5">
                      <input className={`${styles['input-stock-add-admin']}`} type="number" name="stock" id="stock" value={this.state.stock} onChange={this.valueStock} placeholder="Input stock product" />
                    </div>
                    {/* <select className={`${styles['stock-input']} form-select w-100 mt-3`} aria-label="Default select example">
                      <option selected>Input stock</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select> */}
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mx auto">
                  <div className={`${styles['bor']} row d-block pt-5 ps-5 `}>
                    <div className="form-input w-75 pt-5 ">
                      <label className={styles['form-label']}>Name :</label>
                      <input for="" className={`${styles['form-control']} h-75`} type="text" name="name" id="name" value={this.state.product_name} placeholder="Type product name min. 50 characters" />
                    </div>
                    <div className="form-input w-75 pt-4 ">
                      <label className={styles['form-label']}>Price :</label>
                      <input for="" className={`${styles['form-control']} h-75`} type="number" name="price" id="price" value={this.state.price} placeholder="Type the price" />
                    </div>
                    <div className="form-input w-75 pt-4 ">
                      <label className={styles['form-label']}>Description :</label>
                      <input
                        for=""
                        className={`${styles['form-control']} h-75`}
                        type="text"
                        name="description"
                        id="description"
                        value={this.state.description}
                        onChange={this.valueDescription}
                        placeholder="Describe your product min. 150 characters"
                      />
                    </div>
                    <h6 className={styles['size']}>Input product size :</h6>
                    <p className={styles['detail']}>Click methods you want to use for this product</p>
                    <div className="row gap-3 ms-1">
                      <button className={styles['size-chil']} value="R" onClick={this.valueSize}>
                        R
                      </button>
                      <button className={styles['size-chil']} value="L" onClick={this.valueSize}>
                        L
                      </button>
                      <button className={styles['size-chil-xl']} value="XL" onClick={this.valueSize}>
                        XL
                      </button>
                    </div>
                    <h6 className={styles['size']}>Input Category</h6>
                    <p className={styles['detail']}>Click methods you want to use for this product</p>
                    <div className="row gap-1">
                      <button className={styles['delivery-methods']} value="coffee" onClick={this.valueCategory}>
                        Coffee
                      </button>
                      <button className={styles['delivery-methods']} value="non_coffee" onClick={this.valueCategory}>
                        Non Coffee
                      </button>
                      <button className={styles['delivery-methods-ways']} value="food" onClick={this.valueCategory}>
                        Food
                      </button>
                      <button className={styles['delivery-methods-ways']} value="add_on" onClick={this.valueCategory}>
                        Add On
                      </button>
                    </div>
                    <div className="row d-flex flex-column pt-5">
                      <button className={styles['save']} onClick={this.postData}>
                        Save Product
                      </button>
                      <button className={styles['cancel']} onClick={this.handleCancel}>
                        Cancel
                      </button>
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

export default withParams(NewProduct);
