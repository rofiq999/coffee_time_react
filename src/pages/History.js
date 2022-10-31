import React, { Component } from 'react';
import styles from '../style/History.module.css';
import Card from '../components/CardHistory';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import TabTitle from "../utils/WebDinamis"

class History extends Component {
  render() {
    // TabTitle('User History')
    return (
      <>
        <Header />
        <main className={`${styles['hist-bck']} py-5`}>
          <section>
            <div className={`${styles['title1']}`}>Let’s see what you have bought!</div>
            <div className={`${styles['title2']}`}>Long press to delete item</div>
          </section>
          <section className="container col-lg my-5">
            <section className="row justify-content-center">
              <Card />
              <Card />
              <Card />
            </section>
            <section className="row justify-content-center">
              <Card />
              <Card />
              <Card />
            </section>
            <section className="row justify-content-center">
              <Card />
              <Card />
              <Card />
            </section>
            <section className="row justify-content-center">
              <Card />
              <Card />
              <Card />
            </section>
            <section className="row justify-content-center">
              <Card />
              <Card />
              <Card />
            </section>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default History;
