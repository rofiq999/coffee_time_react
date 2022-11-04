// import { Link } from 'react-router-dom';
import title from '../helper/title';
// import css
import styles from '../style/Product.module.css';
// import components
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import CardProduct from '../components/CardProduct';
import Promo from '../components/CardPromo';
// axios
import axios from 'axios';
import React, { Component } from 'react';
// import { render } from '@testing-library/react';

class Product extends Component {
  state = {
    products: [],
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?page=1&limit=12`,
    food: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=food`,
    non_coffee: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=non_coffee`,
    coffee: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=coffee`,
    add_on: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=add_on`,
  };
  //website reload
  componentDidMount() {
    axios
      .get(this.state.url)
      .then((res) => {
        this.setState({ products: res.data.result.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    this.onFood = () => {};
    axios.get(this.state.food).then((res) => this.setState({ products: res.data.result.data }));
    this.onCoffee = () => {
      axios.get(this.state.coffee).then((res) => this.setState({ products: res.data.result.data }));
    };
    this.OnNonCoffee = () => {
      axios.get(this.state.non_coffee).then((res) => this.setState({ products: res.data.result.data }));
    };
    this.onAddOn = () => {
      axios.get(this.state.addons).then((res) => this.setState({ products: res.data.result.data }));
    };
  }

  render() {
    title('Product');
    return (
      <>
        {/* <!-- Start Navbar --> */}
        <Navbar />

        {/* <!-- End Navbar --> */}
        <main>
          <section className={`${styles.borderTop} container-fluid d-flex justify-content-around flex-row row flex-wrap`}>
            {/* promo bar */}
            <div class="col-4">
              <Promo />
            </div>
            <div class="col-7  ">
              {/* Product */}
              <aside className={`${styles['product-right']} d-flex flex-column py-4`}>
                <div className={`${styles['nav-product']} d-flex flex-row justify-content-between`}>
                  <div>
                    <span onClick="">Favorite & Promo</span>
                  </div>
                  <div>
                    <span onClick={this.onCoffee}>Coffee</span>
                  </div>
                  <div>
                    <span onClick={this.OnNonCoffee}>Non Coffee</span>
                  </div>
                  <div>
                    <span onClick={this.onFood}>Foods</span>
                  </div>
                  <div>
                    <span onClick={this.onAddOn}>Add-on</span>
                  </div>
                </div>

                <section className=" text-center row d-flex justify-content-between flex-wrap">
                  <div className={` ${styles['list-content']} d-flex flex-wrap col-12`}>
                    {/* <CardProduct /> */}
                    {this.state.products.map((item) => (
                      <CardProduct product_name={item.product_name} price={item.price} image={item.image} size={item.size} />
                    ))}
                  </div>
                </section>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Product;
