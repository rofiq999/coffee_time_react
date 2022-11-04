import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Header';
// css
import styles from '../style/Profile.module.css';
import title from '../helper/title';

// import Router Link
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// assets
import bg_profiles from '../assets/img/profilelarge.png';
import icon_edit from '../assets/img/icon_editpencil.png';
// import icon_arrow from '../assets/img/icon_arrow.png';
function Profile() {
  title('Profile');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  });
  return (
    <>
      {/* header */}
      <Navbar />
      {/* header */}
      <main className={styles.container}>
        <section className={styles.content__bar}>
          <h1>User Profile</h1>
          <div className={styles.content__profile}>
            <div className={styles.content__contact}>
              <section className={styles.user__profile}>
                <div className={styles.user__img}>
                  <img src={bg_profiles} alt="img_userprofile" />
                  <label for="files" id="lable_file">
                    <img src={icon_edit} alt="icon_edit" />
                  </label>
                  <input type="file" name="file" className={styles.hidden} id="files" />
                </div>
                <h3>Zulaikha</h3>
                <p className={styles.user__email}>zulaikha17@gmail.com</p>
                <p id="order">Has been ordered 15 products</p>
              </section>
              <section className={styles.user__contact}>
                <div className={styles.contact}>
                  <h2>Contacts</h2>
                  <img src={icon_edit} alt="icon_edit" />
                </div>
                <div className={styles.input__contact}>
                  <div className={styles.column}>
                    <label for="email">Email adress :</label>
                    <input type="email" name="email" id="email" value="zulaikha17@gmail.com" />
                  </div>
                  <div className={styles.column}>
                    <label for="phones">Mobile number :</label>
                    <input type="tel" name="phones" id="phones" value="(+62)813456782" />
                  </div>
                </div>
                <div className={`${styles.input__contact} ${styles.column}`}>
                  <label for="deliv_address">Delivery adress :</label>
                  <input type="text" name="deliv_address" id="deliv_address" value="Iskandar Street no. 67 Block A Near Bus Stop" />
                </div>
              </section>
            </div>
            <div className={styles.user__detail_bar}>
              <div className={styles.user__detail}>
                <div className={styles.detail}>
                  <h2>Details</h2>
                  <img src={icon_edit} alt="icon_change" />
                </div>
                <div className={styles.user__name}>
                  <div className={styles.input__name}>
                    <div className={styles.input__column}>
                      <label for="displayname">Display name :</label>
                      <input type="text" name="displayname" id="displayname" value="Zulaikha" />
                    </div>
                    <div className={styles.input__column}>
                      <label for="first">First name :</label>
                      <input type="text" name="first" id="first" value="Zulaikha" />
                    </div>
                    <div className={styles.input__column}>
                      <label for="last">Last name :</label>
                      <input type="text" name="last" id="last" value="Nirmala" />
                    </div>
                  </div>
                  <div className={styles.input__column}>
                    <label for="birthday">DD/MM/YYYY :</label>
                    <input className={styles.birthday} type="date" name="birthday" id="birthday" value="1990-03-04" />
                    <div className={styles.input__radio}>
                      <input type="radio" name="gender" id="male" />
                      <label for="male" className={styles.radio_label}>
                        Male
                      </label>
                    </div>
                    <div className={styles.input__radio}>
                      <input type="radio" name="gender" id="female" checked />
                      <label for="female" className={styles.radio_label}>
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.user__utility}>
                <h3>Do you want to save the change?</h3>
                <button className={`${styles.btn_utility} ${styles.save}`} type="submit">
                  Save Change
                </button>
                <button className={`${styles.btn_utility} ${styles.cancel}`} type="reset">
                  Cancel
                </button>
                <span className={`${styles.btn_utility} ${styles.edit}`}>
                  <Link to="/forgotpass">Edit Password</Link>
                  <i class="bi bi-chevron-right"></i>
                </span>
                <span
                  onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                    navigate('/login');
                  }}
                  className={`${styles.btn_utility} ${styles.logout}`}
                >
                  <a>Log out</a>

                  <i class="bi bi-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
