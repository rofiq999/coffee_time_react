import React, { Component } from 'react';
import Axios from 'axios';
import styles from '../style/History.module.css';
import Card from '../components/CardHistory';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import title from '../helper/title';
class History extends Component {
  state = {
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/transactions/history?page=1&limit=12`,
    history: [],
    name: '',
    image: '',
    total: '',
    status: '',
  };

  componentDidMount() {
    const getToken = localStorage.getItem('token');
    Axios.get(this.state.url, {
      headers: {
        'x-access-token': getToken,
      },
    })
      .then((response) => {
        console.log(response.data.result.data);
        this.setState({ history: response.data.result.data }, () => {
          // return res.data.result.data[0].image;
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  costring = (total) => {
    return (
      'IDR ' +
      parseFloat(total)
        .toFixed()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    );
  };

  render() {
    title('History');
    //   TabTitle("User History");
    return (
      <>
        <Navbar />
        {/* <Header /> */}
        <main className={`${styles['hist-bck']} py-5`}>
          <section>
            <div className={`${styles['title-name']}`}>Let’s see what you have bought!</div>
            <div className={`${styles['h2']}`}>Long press to delete item</div>
          </section>
          <section className="container col-lg my-5">
            <section className="row justify-content-center">
              {this.state.history.map((item, key) => (
                <Card
                  name={item.product_name}
                  total={this.costring(item.total)}
                  image={item.image}
                  status={item.status}
                  key={`${key}`}
                  // id={item.id}
                />
              ))}
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default History;
