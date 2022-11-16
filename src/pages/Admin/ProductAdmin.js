import React, { Component } from 'react';
import title from '../../helper/title';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import css
import styles from '../../style/ProductAdmin.module.css';
// import components
import Navbar from '../../components/Header';
import NavbarNotLogin from '../../components/HeaderNotLogin';
import NavbarAdmin from '../../components/HeaderAdmin';
import Footer from '../../components/Footer';
import Promo from '../../components/CardPromo';
import withParams from '../../helper/withRouteParams';
import withSearchParams from '../../helper/withSearchParams';
import withNavigate from '../../helper/withNavigate';

// axios
import axios from 'axios';
import CardProductAdmin from '../../components/CardProductAdmin';
class ProductAdmin extends Component {
  // variabel class
  state = {
    products: [],
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
    navLogin: <Navbar />,
    navAdmin: <NavbarAdmin />,
    navnotLogin: <NavbarNotLogin />,
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?page=1&limit=12`,
    favorite: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?sort=favorite&page=1&limit=12`,
    food: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=food`,
    non_coffee: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=non_coffee`,
    coffee: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=coffee`,
    add_on: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/?category=add_on`,
    sort: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/product/`,
    currentPage: 1,
    totalPage: 1,
    searchParams: {},
  };

  costToRP = (price) => {
    return (
      'IDR ' +
      parseFloat(price)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
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
  // ketika website di reload
  componentDidMount() {
    axios
      .get(this.state.favorite)
      .then((res) => {
        this.setState(
          { products: res.data.result.data }
          // console.log(res.data.result);
          // return res.data.result.data[0].image;
        );
        this.setState({ totalPage: res.data.result.totalPage });
      })
      .catch((err) => console.log(err));
  }

  onFavorite = () => {
    axios
      .get(this.state.favorite)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  onFood = () => {
    axios
      .get(this.state.food)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  onCoffee = () => {
    axios
      .get(this.state.coffee)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  OnNonCoffee = () => {
    axios
      .get(this.state.non_coffee)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  onAddOn = () => {
    axios
      .get(this.state.add_on)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };

  onSort = (e) => {
    console.log(e.target.value);
    axios
      .get(`${this.state.sort}?sort=${e.target.value}&limit=12`)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  getPrevProducts = () => {
    this.state.currentPage = this.state.currentPage - 1;
    axios
      .get(`${this.state.sort}?page=${this.state.currentPage}&limit=12`)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };
  getNextProducts = () => {
    this.state.currentPage = this.state.currentPage + 1;

    axios
      .get(`${this.state.sort}?page=${this.state.currentPage}&limit=12`)
      .then((res) => this.setState({ products: res.data.result.data }))
      .catch((err) => console.log(err));
  };

  render() {
    title('Product');
    // const userInfo = JSON.parse(localStorage["userInfo"] || "{}");
    return (
      <>
        {/* <!-- Start Navbar --> */}
        {/* {userInfo.token ? <Navbar /> : <NavbarLogin />} */}
        <this.navType />
        {/* <!-- End Navbar --> */}
        <main>
          <section className={`${styles.borderTop} container-fluid d-flex justify-content-around flex-row row flex-wrap w-100`}>
            {/* promo bar */}
            <div className="col-lg-4 col-md-12 col-sm-12">
              <Promo />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
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
                        this.OnNonCoffee();
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
                    {/* <Link to="">Foods</Link> */}
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
                      Food
                    </span>
                  </div>
                  <div>
                    <span
                      onClick={() => {
                        this.onAddOn();
                        this.setState(
                          {
                            searchParams: { category: 'addons' },
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

                <select class={`${styles['form-sort']} mt-5`} aria-label="Default select example" onChange={this.onSort}>
                  <option selected>sort</option>
                  <option value="high">expensive</option>
                  <option value="low">cheapest</option>
                  <option value="newest">newest</option>
                  <option value="oldest">oldest</option>
                </select>

                <section className=" text-center row d-flex justify-content-center justify-content-md-center justify-content-lg-end flex-wrap justify-content-center align-items-center  ">
                  <div className={`row ${styles['list-content']} d-flex flex-wrap justify-content-start col-12 col-sm-12 col-md-12 `}>
                    {this.state.products.map((item, key) => (
                      <CardProductAdmin key={`${key}`} id={item.id} params={item.id} product_name={item.product_name} price={this.costToRP(item.price)} size={item.size} image={item.image} />
                    ))}
                  </div>
                </section>
                <button
                  onClick={() => {
                    this.props.navigate('/newproduct');
                  }}
                  className={`${styles.addNew}`}
                >
                  Add new product
                </button>
                <button
                  className={`${styles.addNewPromo}`}
                  onClick={() => {
                    this.props.navigate('/newpromo');
                  }}
                >
                  Add Promo
                </button>
              </aside>
              <div className={`${styles['paginasi']} container`}>
                <button className={`${styles['prev']} bi bi-chevron-left`} onClick={this.getPrevProducts} disabled={this.state.currentPage === 1}>
                  Prev
                </button>
                <button className={`${styles['next']}`} onClick={this.getNextProducts} disabled={this.state.totalPage === this.state.currentPage}>
                  Next<span class="bi bi-chevron-right"></span>
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
export default withNavigate(withSearchParams(withParams(ProductAdmin)));
