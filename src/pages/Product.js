// import { Link } from 'react-router-dom';
import title from '../helper/title';
import withParams from '../helper/withRouteParams';
import withSearchParams from '../helper/withSearchParams';
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

class Product extends Component {
  state = {
    products: [],
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?page=1&limit=12`,
    favorite: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?sort=favorite&page=1&limit=12`,
    food: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=food`,
    non_coffee: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=non_coffee`,
    coffee: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=coffee`,
    add_on: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=add_on`,
  };

  componentDidMount() {
    axios
      .get(this.state.url)
      .then((res) => {
        this.setState({ products: res.data.result.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {}

  onFavorite = () => {
    axios
      .get(this.state.favorite)
      .then((res) => this.setState({ product: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  costing = (price) => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };
  onCoffee = () => {
    axios
      .get(this.state.coffee)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  onNonCoffee = () => {
    axios
      .get(this.state.non_coffee)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  onFood = () => {
    axios
      .get(this.state.food)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  onAddOn = () => {
    axios
      .get(this.state.add_on)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };

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
                    <span
                      onClick={() => {
                        this.onFavorite();
                        this.setState(
                          {
                            searchParams: { category: 'favorite' },
                          },
                          () => {
                            this.props.setSearchParams(this.state.searchParams);
                          }
                        );
                      }}
                    >
                      Favorite & Promo
                    </span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.onCoffee();
                        this.setState(
                          {
                            searchParams: { category: 'coffee' },
                          },
                          () => {
                            this.props.setSearchParams(this.state.searchParams);
                          }
                        );
                      }}
                    >
                      Coffee
                    </span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.onNonCoffee();
                        this.setState(
                          {
                            searchParams: { category: 'non_coffee' },
                          },
                          () => {
                            this.props.setSearchParams(this.state.searchParams);
                          }
                        );
                      }}
                    >
                      Non Coffee
                    </span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.onFood();
                        this.setState(
                          {
                            searchParams: { category: 'food' },
                          },
                          () => {
                            this.props.setSearchParams(this.state.searchParams);
                          }
                        );
                      }}
                    >
                      Foods
                    </span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.onAddOn();
                        this.setState(
                          {
                            searchParams: { category: 'add_on' },
                          },
                          () => {
                            this.props.setSearchParams(this.state.searchParams);
                          }
                        );
                      }}
                    >
                      Add-on
                    </span>
                  </div>
                </div>

                <section className=" text-center row d-flex justify-content-between flex-wrap">
                  <div className={` ${styles['list-content']} d-flex flex-wrap col-12`}>
                    {/* <CardProduct /> */}
                    {this.state.products.map((item, key) => (
                      <CardProduct key={`${key}`} id={item.id} params={item.id} product_name={item.product_name} price={this.costing(item.price)} image={item.image} size={item.size} />
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

export default withSearchParams(withParams(Product));
