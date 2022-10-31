import React, { Component, Fragment } from 'react';
import styles from '../style/ForgotPass.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../components/Footer';

class ForgotPass extends Component {
  render() {
    return (
      <Fragment>
        <main>
          <section>
            <div className={`${styles['jumbotron']} ${styles['container-fluid']}`}>
              <div className="container">
                <h1 className="display-4 text-white text-center pt-5 fw-bold">Forgot your Password</h1>
                <p className="lead text-white text-center fw-bold">Dont worry, we got your back!</p>
              </div>
              <form className="r-flex jow dustify-content-center">
                <div className="col-md-3 col-lg-3 col-xl-6 mx-auto d-flex align-items-center gap-5">
                  <label for="inputEmail"></label>
                  <input type="text" className={styles['form-control']} id="inputEmail " placeholder="Enter your email addres to getlink " />
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto d-flex align-items-end mt-3">
                    <button type="submit" className={`${styles['btn']}  ${styles['btn-primary mb-3']}`}>
                      Send
                    </button>
                  </div>
                </div>
                <p className="text-white text-center mt-5 fw-semibold">
                  Click here if you didn't receive any link <br />
                  in 2 minutes
                </p>
                <div className="d-flex justify-content-center">
                  <button className={`${styles['b']} mb-5 mt-3 text-white`}>Resend Link</button>
                </div>
                <p className="text-center fw-bold text-white pb-5">01:54</p>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default ForgotPass;
