// import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Header';
// css
import styles from '../style/Profile.module.css';
import title from '../helper/title';

// import Router Link
import { Link } from 'react-router-dom';
import withNavigate from '../helper/withNavigate';

// assets
// import bg_profiles from '../assets/img/profilelarge.png';
import icon_edit from '../assets/img/icon_editpencil.png';
// import icon_arrow from '../assets/img/icon_arrow.png';

import React, { Component } from 'react';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Profile extends Component {
  state = {
    url: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/users`,
    urlLogout: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/auth`,
    // urlpatch: `${process.env.REACT_APP_BACKEND_HOST}coffe_time/users`,
    email: '',
    phone_number: '',
    addres: '',
    display_name: '',
    firstname: '',
    lastname: '',
    birthday: '',
    gender: '',
    display_nameNotChange: null,
    image: null,
    displayImage: null,
    isEditContact: true,
    show: false,
    isEdit: true,
  };
  componentDidMount() {
    const getToken = localStorage.getItem('token');
    // console.log(token);
    // console.log(userInfo.token); getToken
    Axios.get(this.state.url, {
      headers: {
        'x-access-token': getToken,
      },
    })
      .then((response) => {
        const data = response.data.result.result[0];
        // console.log(response.data.result.result[0].email);
        // console.log(response.msg);

        const bd = new Date(data.birthday);
        const bd_date = bd.getDate();
        const bd_month = bd.getMonth();
        const bd_year = bd.getFullYear();
        const bd_string = `${bd_year}-${bd_month}-${bd_date}`;

        this.setState({
          display_name: data.display_name,
          display_nameNotChange: data.display_name,
          email: data.email,
          phone_number: data.phone_number,
          addres: data.addres,
          firstname: data.firstname,
          lastname: data.lastname,
          birthday: bd_string,
          gender: data.gender,
          image: data.image,
          displayImage: data.image,
        });
      })
      .catch((err) => {
        console.log(this.state);
      });
  }

  inputImage = (event) => {
    // console.log(this.state.image);
    if (event.target.files && event.target.files[0]) {
      this.setState({
        displayImage: URL.createObjectURL(event.target.files[0]),
        image: event.target.files[0],
      });
    }
  };

  handleFile = (e) => {
    let file = e.target.files[0];
    this.setState({ image: file });
    // console.log(e.target.files[0]);
    // console.log(URL.createObjectURL(e.target.files[0]));
  };

  submitEditprofile = (event) => {
    event.preventDefault();
    const getToken = localStorage.getItem('token');
    const { image, addres, display_name, firstname, lastname, gender, birthday } = this.state;
    let formData = new FormData();
    if (image) formData.append('image', image);
    if (addres) formData.append('addres', addres);
    if (display_name) formData.append('display_name', display_name);
    if (firstname) formData.append('firstname', firstname);
    if (lastname) formData.append('lastname', lastname);
    if (gender) formData.append('gender', gender);
    if (birthday) formData.append('birthday', birthday);
    // debug
    // for (var pair of formData.entries()) {
    //    console.log(pair[0] + " - " + pair[1]);
    // }
    Axios.patch(this.state.url, formData, {
      headers: {
        'x-access-token': getToken,
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((response) => {
        console.log(response.data.msg);
        toast.success(response.data.msg, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          // Run code
          window.location.reload();
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.err(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  handleLogout = () => {
    const getToken = localStorage.getItem('token');
    Axios.delete(this.state.urlLogout, {
      headers: {
        'x-access-token': getToken,
      },
    })
      .then(console.log('Logout Berhasil'))
      .catch((err) => console.log(err));
  };

  LogoutMessage = () => {
    toast.success('Logout Berhasil !', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  onEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onPhone = (e) => {
    this.setState({ phone_number: e.target.value });
  };
  onAddres = (e) => {
    this.setState({ addres: e.target.value });
  };
  onDisplayname = (e) => {
    this.setState({ display_name: e.target.value });
  };
  onFirstname = (e) => {
    this.setState({ firstname: e.target.value });
  };
  onLastname = (e) => {
    this.setState({ lastname: e.target.value });
  };
  onBirthday = (e) => {
    this.setState({ birthday: e.target.value });
  };
  onGender = (e) => {
    this.setState({ gender: e.target.value });
  };
  onEdit = () => {
    this.setState({ isEdit: false });
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  render() {
    let { display_name, display_nameNotChange, email, phone_number, addres, firstname, lastname, birthday, gender, image } = this.state;
    title('Profile');
    return (
      <>
        <Navbar />
        {/* header */}
        <main className={styles.container}>
          <section className={styles.content__bar}>
            <h1>User Profile</h1>
            <div className={styles.content__profile}>
              <div className={styles.content__contact}>
                <section className={styles.user__profile}>
                  <div className={styles.user__img}>
                    <img src={this.state.displayImage} alt="img_userprofile" />
                    <label for="files" id="lable_file">
                      <img src={icon_edit} alt="icon_edit" />
                    </label>
                    <input type="file" name="file" className={styles.hidden} id="files" onChange={this.inputImage} />
                  </div>
                  <h3>{display_nameNotChange}</h3>
                  <p className={styles.user__email}>{email}</p>
                  <p id="order">Has been ordered 15 products</p>
                </section>
                <section className={styles.user__contact}>
                  <div className={styles.contact}>
                    <h2>Contacts</h2>
                    <img src={icon_edit} alt="icon_edit" onClick={this.onEdit} />
                  </div>
                  <div className={styles.input__contact}>
                    <div className={styles.column}>
                      <label for="email">Email adress :</label>
                      <input type="email" name="email" id="email" value={email} disabled={this.state.isEdit} />
                    </div>
                    <div className={styles.column}>
                      <label for="phones">Mobile number :</label>
                      <input type="tel" name="phone_number" id="phones" value={phone_number} onChange={this.onPhone} disabled={this.state.isEdit} />
                    </div>
                  </div>
                  <div className={`${styles.input__contact} ${styles.column}`}>
                    <label htmlfor="deliv_address">Delivery adress :</label>
                    <input type="text" name="address" id="address" value={addres} onChange={this.onAddres} disabled={this.state.isEdit} />
                  </div>
                </section>
              </div>
              <div className={styles.user__detail_bar}>
                <div className={styles.user__detail}>
                  <div className={styles.detail}>
                    <h2>Details</h2>
                    <img src={icon_edit} alt="icon_change" onClick={this.onEdit} />
                  </div>
                  <div className={styles.user__name}>
                    <div className={styles.input__name}>
                      <div className={styles.input__column}>
                        <label htmlfor="displayname">Display name :</label>
                        <input type="text" name="displayname" id="displayname" value={display_name} onChange={this.onDisplayname} disabled={this.state.isEdit} />
                      </div>
                      <div className={styles.input__column}>
                        <label htmlfor="first">First name :</label>
                        <input type="text" name="first" id="first" value={firstname} onChange={this.onFirstname} disabled={this.state.isEdit} />
                      </div>
                      <div className={styles.input__column}>
                        <label htmlfor="last">Last name :</label>
                        <input type="text" name="last" id="last" value={lastname} onChange={this.onLastname} disabled={this.state.isEdit} />
                      </div>
                    </div>
                    <div className={styles.input__column}>
                      <label for="birthday">DD/MM/YYYY :</label>
                      <input className={styles.birthday} type={this.state.isEdit ? 'text' : 'date'} name="birthday" id="birthday" value={birthday} onChange={this.onBirthday} placeholder="Birthday date" />
                      <div className={styles.input__radio}>
                        <input type="radio" name="gender" id="male" value={'MALE'} onChange={this.onGender} checked={gender === 'MALE'} disabled={this.state.isEdit} />
                        <label for="male" className={styles.radio_label}>
                          Male
                        </label>
                      </div>
                      <div className={styles.input__radio}>
                        <input type="radio" name="gender" id="female" value={'FEMALE'} onChange={this.onGender} checked={gender === 'FEMALE'} disabled={this.state.isEdit} />
                        <label for="female" className={styles.radio_label}>
                          Female
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.user__utility}>
                  <h3>Do you want to save the change?</h3>
                  <button className={`${styles.btn_utility} ${styles.save}`} onClick={this.submitEditprofile}>
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
                      this.handleShow();
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
          <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className="fw-bold text-bg-secondary text-white" onClick={this.handleClose}>
                No
              </Button>
              <Button
                variant="success"
                className="fw-bold text-bg-success text-white"
                onClick={() => {
                  // this.SuccessToastMessage();
                  this.handleLogout();
                  localStorage.removeItem('token');
                  localStorage.removeItem('role');
                  this.LogoutMessage();
                  setTimeout(() => {
                    this.props.navigate('/login');
                  }, 2000);
                }}
              >
                Yes
              </Button>
            </Modal.Footer>
          </Modal>
        </main>
        <Footer />
        <ToastContainer />
      </>
    );
  }
}

export default withNavigate(Profile);
