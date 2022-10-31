import styles from '../style/Footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import facebook from '../assets/img/Facebook.png';
import twitter from '../assets/img/Twitter.png';
import instagram from '../assets/img/Instagram.png';
import coffee from '../assets/img/coffee.png';

function Footer() {
  return (
    <>
      <footer className="footer text-black pt-5 pb-5">
        <div className="container text-center text-md-left">
          <div className="row text-start text-md-left d-flex flex-column-reverse flex-sm-column-reverse flex-md-row flex-lg-row">
            <div className="col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">
                <img src={coffee} alt="" /> Coffe Time
              </h5>
              <p>Coffee shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
              <div className="img d-flex justify-content-start">
                <a href="">
                  <img src={facebook} alt="" />
                </a>
                <a href="">
                  <img src={twitter} alt="" />
                </a>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
              </div>
              <p>@2022CoffeeStore</p>
            </div>
            <div className="d-flex col-lg-6 col-md-6 ">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="mb-4 font-weight-bold">Product</h5>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Download
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Locations
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Countries
                  </a>
                </p>
              </div>
              <div className=" mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Engage</h5>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Coffe Shop?
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    FAX
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Terms of Service
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#" className={`${styles['footer-right']} text-black`}>
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
